const express = require("express");
const app = express();

//handling different routes

//body parse middleware
const bodyParser = require('body-parser');

// adding other middleware
app.use(bodyParser.urlencoded({ extended: false}));

app.use("/add-product", (req, res, next) => {
    //only go to request of "/"
    res.send("<h1>Add Product</h1><form action='product' method='post'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
});

app.use("/product", (req, res, next) => {
    //this isn't parsed
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    //only go to request of "/"
    res.send("<h1>Hello From Express</h1>");
});



app.listen(3000, function () {
    console.log("server is now running");
})
