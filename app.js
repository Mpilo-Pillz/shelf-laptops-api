const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Laptop = require('./models/laptop'); 


mongoose.connect("mongodb://localhost/shelf_laptops");
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get("/", function(req, res) {
    res.send("working");
})

app.get("/api/laptops", (req,res, next) => {
    Laptop.find((err, alLaptops) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({
                message: "succsessful fetched laptops",
                laptops: alLaptops
            });
        }
    })
});

app.post("/api/laptops", (req, res, next) => {
    const laptop = new Laptop({
        brand: req.body.brand,
        model:req.body.model,
        ram: req.body.ram,
        processor: req.body.processor,
        storage: req.body.storage,
        condition: req.body.condition,
        misc: req.body.misc,
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.body.image
    });

    console.log(laptop);
    res.status(201).json({
        message: "Laptop added succesfully"
    });
});

const port = 3000;
app.listen(port, () => console.log(`Shelp laptops listening at port ${port}`));