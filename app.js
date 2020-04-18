const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')
const Laptop = require('./models/laptop'); 


mongoose.connect("mongodb://localhost/shelf_laptops", {useNewUrlParser: true})
.then(() => {
    console.log('Connected to Mongo Database succesfully')
})
.catch(() => {
    console.log("FAILED TO CONNECT!!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
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

app.get("/api/laptops/:id", (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({
        message: 'laptop gottetd'
    });
})

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
    laptop.save();
    res.status(201).json({
        message: "Laptop added succesfully"
    });
});

app.delete("/api/laptops/:id", (req, res, next) => {
    Laptop.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
    })
    res.status(200).json({
        message: 'laptop deleted'
    });
})

app.put("/api/laptops/:id", (req, res, next) => {
    const laptop = new Laptop({
        _id: req.body._id,
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
   Laptop.updateOne({_id: req.params.id}, laptop).then(result => {
       console.log(result);
       res.status(200).json({message: 'Update successful'});
   }) 
})

const port = 3000;
app.listen(port, () => console.log(`Shelp laptops listening at port ${port}`));