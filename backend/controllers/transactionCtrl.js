const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");
//! User Registration

const transactionController = {
  //!add
  create: asyncHandler(async (req, res) => {
    const { type, Category, amount, date, description } = req.body;
    if (!amount || !type || !date) {
      throw new Error("Type, amount and date are required");
    }
    //! Create

    const transaction = await Transaction.create({
      user: req.user,
      type,
      category,
      amount,
      description,
    });
    res.json(transaction);
  }),
  //!lists
  getFilteredTransactions: asyncHandler(async (req, res) => {
    const { startDate, endDate, type, category } = req.query;
    let filters = {
      user: req.user,
    };
    if (startDate) {
      //This means that the start date must be greater than or equal to the value of the date in this particular transaction
      filters.date = { ...filters.date, $gte: new Date(startDate) };
    }

    if (endDate) {
      //This means that the end date must be less than or equal to the value of the date in this particular transaction
      filters.date = { ...filters.date, $lte: new Date(startDate) };
    }

    if (type) {
      filters.type = type;
    }

    if (category) {
      if (category === "All") {
        //In case we have this means that no category filter is needed when filtering for all
      } else if (category === "Uncategorized") {
        //then we are going to filter for transactions which are specifically categorized as uncategorized
        filters.category = "Uncategorized";
      } else {
        filters.category = category;
      }
    }
    const transactions = await Transaction.find(filters).sort({ date: -1 }); //meaning ascending order

    res.json(transactions);
  }),
  //!update
  update: asyncHandler(async (req, res) => {
    //params are the values that begin with : and queries are the values that begin with ?
    const transaction = await Transaction.findById(req.params.id);
    if (transaction && transaction.user.toString() === user.req.toString()) {
      //remember that the ids for mongo dbs are objects and when comparing objects, remember objects are being passed by reference
      //and to make sure we are comparing two values we are going to compare two strings and convert them to strings to do so

      transaction.type = req.body.type || transaction.type;
      transaction.category = req.body.category || transaction.category;
      transaction.amount = req.body.amount || transaction.amount;
      transaction.date = req.body.date || transaction.date;
      transaction.description = req.body.description || transaction.description;

      const updatedTransaction = await transaction.save(
        res.json(updatedTransaction)
      );
    }
  }),

  //! delete

  delete: asyncHandler(async (req, res) => {
    //!Find the transaction
    const transaction = await Transaction.findById(req.params.id);
    if (transaction && transaction.user.toString() === req.user.toString()) {
      await Transaction.findByIdAndDelete(req.params.id);
      res.json({ message: "Transaction removed " });
    }
  }),
};

module.exports = transactionController;
