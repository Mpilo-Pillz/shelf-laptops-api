# shelf-laptops-api
Express and Mongoose API for Shelf Laptops Vue Web App

# Basic Mongo Commands
* mongod - to start mongo daemon tool
* mongo - Opens up th eMongo shell
* help - give a list of the basic list of comands 
* show dbs - shows the databases
* use - select a database
* insert - add into a database collection eg (db.laptops.insert({ram: "16GB", storage: "512GB SSD"})) the collection in this case is laptops
* show collections - shows the collections in the db
* find - view all "laptops" in the database (e.g db.laptops.find()) / db.laptops.find({ram: "32GB"}) 
* update - update a value of an object (e.g db.laptops.update({ram: "32GB", {$set: {stotage: "1TB", processor: "i7 10th Gen"}}
* remove - destroy / delete a record (e.g db.laptops.remove({ram: "8GB})
