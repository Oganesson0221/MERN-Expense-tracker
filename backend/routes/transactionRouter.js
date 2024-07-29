const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const transactionController = require("../controllers/transactionCtrl");
const transactionRouter = express.Router();

//!add
transactionRouter.post(
  "/api/v1/transactions/add",
  isAuthenticated,
  transactionController.create
);
//!lists
transactionRouter.get(
  "/api/v1/categories/lists",
  isAuthenticated,
  transactionController.getFilteredTransactions
);

//!update
transactionRouter.put(
  "/api/v1/categories/update/:id",
  isAuthenticated,
  transactionController.update
);

//!delete
transactionRouter.delete(
  "/api/v1/categories/delete/:id",
  isAuthenticated,
  transactionController.delete
);

module.exports = transactionRouter;
