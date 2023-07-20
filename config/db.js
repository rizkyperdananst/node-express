const mongoose = require("mongoose");

// Connection Databse MongoDB
const server = mongoose.connect("mongodb://127.0.0.1:27017/nodeexpress").then(() => {
     console.log("Database connected");
}).catch((err) => {
     console.log("Database not connected");
})

module.exports = server;