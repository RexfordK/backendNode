const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path.js");
const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
    //only go to request of "/"
    console.log(adminData.products);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("layouts/shop.ejs", {prods: adminData.products});
});

module.exports = router;
