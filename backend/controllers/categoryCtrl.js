const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");

//! User Registration

const categoryController = {
  //!add
  create: asyncHandler(async (req, res) => {
    const { name, type } = req.body;
    if (!name || !type) {
      throw new Error("Name and type are required for creating a new category");
    }
    //Convert the name to lowercase
    const normalizedName = name.toLowerCase();
    //! Check if the type is valid
    const validTypes = ["income", "expense"];
    if (!validTypes.includes(type.toLowerCase())) {
      throw new Error("Invalid category type" + type);
    }
    //!Check if category already exists on the user
    const categoryExists = await Category.findOne({
      name: normalizedName,
      user: req.user,
    });
    if (categoryExists) {
      throw new Error(
        `Category ${categoryExists.name} already exists in the database`
      );
    }
    //! Create the category

    const category = await Category.create({
      name: normalizedName,
      user: req.user,
      type,
    });
    res.status(201).json(category);
  }),
  //!lists
  lists: asyncHandler(async (req, res) => {
    const categories = await Category.find({ user: req.user });
    res.status(200).json(categories);
  }),
  //!update
  update: asyncHandler(async (req, res) => {
    const categoryId = req.params;
    const { type, name } = req.body;
    const normalizedName = name.toLowerCase();
    const category = await Category.findById(categoryId);

    //we want to check if the login user is the one who wants to update the category
    if (!category && category.user.toString() !== req.user.toString()) {
      throw new Error("Category not found or user not authorized");
    }
    const oldName = category.name; //this means we are storing the old name to identify the affected transactions
    //and then we are going to  update the category's properties
    category.name = name;
    category.type = type;
    const updatedCategory = await category.save();
    //Update affected transaction
    if (oldName !== updatedCategory.name) {
      await Transaction.updateMany(
        {
          user: req.user,
          category: oldName,
        },
        {
          $set: { category: updatedCategory.name },
        }
      );
    }
    res.json(updatedCategory);
  }),

  //! delete

  delete: asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category && category.user.toString() === req.user.toString()) {
      //! update the transactions that have this category
      const defaultCategory = "Uncategorized";
      //so here we are going to fetch the default category
      await Transaction.updateMany(
        {
          user: req.user,
          category: category._id,
        },
        {
          $set: { category: defaultCategory },
        }
      );
      //! remove category
      await Category.findByIdAndDelete(req.params.id);
      res.json({ message: "Category removed and transactions updated" });
    } else {
      res.json({ message: "Category not found or user not authorized" });
    }
  }),
};

module.exports = categoryController;
