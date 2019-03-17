const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path.js");

// adding 404 page
router.use(function(req, res, next) {
    res.status(404).render("layouts/404.ejs", { pageTitle: "page not found"});
  });

  module.exports = router;