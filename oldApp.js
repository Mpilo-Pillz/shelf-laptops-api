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

//SCHEMA
// const laptopSchema = new mongoose.Schema({
//         id: Number,
//         brand: String,
//         model: String,
//         ram: String,
//         processor: String,
//         storage: String,
//         condition: String,
//         misc: String,
//         quantity: String,
//         price: String,
//         image: String
// });

// const laptop = mongoose.model("Laptop", laptopSchema);

// Laptop.create(
//     {
//         brand: "Apple",
//         model: "Macbook Pro 15",
//         ram: "16GB",
//         processor: "i7 9th Gen",
//         storage: "1TB SSD",
//         condition: "New Demo condition",
//         misc: "Touch Bar",
//         quantity: "5",
//         price: "R25000",
//         image: "https://placekitten.com/640/360"
//     }, function(err, laptop) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("SUCCESSFULLY ADDED LAPTOP");
//             console.log(laptop);
//         }
//     }
// )

app.get("/", function(req, res) {
    res.send("working");
})

app.get("/api/laptops", function(req,res){
    // laptop.find().then(documents => {
    //     console.log(documents);
    //     res.status(200).json({
    //         message: "laptops fetched successfully",
    //         laptops: documents
    //     });
    // });


    const laptopsArr = [
        {
        id: "1",
        brand: "Lenovo",
        model: "idea pad 850",
        ram: "16GB",
        processor: "i7 7th Gen",
        storage: "512GB SSD",
        condition: "New Demo condition",
        misc: "Touch Screen",
        quantity: "2",
        price: "R10000",
        image: "https://placekitten.com/640/360"
    }
    ];


    Laptop.find({}, function(err, alLaptops) {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({
                message: "succsessful",
                laptops:alLaptops});
        }
    })
    // res.send(laptopsArr);
    // res.render("laptops", {laptops:laptopsArr});
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
});

app.post("/api/laptops", function(req, res, next) {
    const laptop = new Laptop({
        
    });
    const brand = req.body.brand;
    const model = req.body.model;
    const ram = req.body.ram;
    const processor = req.body.processor;
    const storage = req.body.storage;
    const condition = req.body.condition;
    const misc = req.body.misc;
    const price = req.body.price;
    const image = req.body.image;

    const newLaptop = {
        brand: brand,
        model: model,
        ram: ram,
        processor: processor,
        storage: storage,
        condition: condition,
        misc: misc,
        quantity: quantity,
        price: price,
        image: image
    }

    laptops.push(newLaptop);
    res.status(201).json({
        message: 'Laptop Added Successfully'
    });
});
const port = 3000;
app.listen(port, () => console.log(`Shelp laptops listening at port ${port}`));