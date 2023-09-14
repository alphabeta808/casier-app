const express = require("express");
const app = express();
const Items = require("../Handler/Items/handler");
const Users = require("../Handler/User/handler")


// Items handler
app.get("/items/getAll", Items.getItems);
app.get("/item/:id", Items.getItemById);
app.post("/item/add", Items.addItems);
app.put("/item/update/:id", Items.updateItem);
app.delete("/item/delete/:id", Items.deleteItem);


// Users handler
app.get('/user/getAll', Users.getAll);
app.post('/user/add', Users.addUser);


module.exports = app;
