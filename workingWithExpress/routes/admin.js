const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path.js");

const products = [];

router.get("/add-product", (req, res, next) => {
  //only go to request of "/"
  res.render("layouts/add-product.ejs");
});

router.post("/add-product", (req, res, next) => {
  //this isn't parsed
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
