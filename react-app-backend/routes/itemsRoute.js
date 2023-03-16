const express = require('express');
const app = express();
const handler = require('../handler');

app.get('/items/getAll', handler.getAllItemsHandler);
app.get('/items/:id', handler.getItemByIdHandler);
app.post('/items/add', handler.addItemsHandler);
app.put('/items/update/:id', handler.updateItemHandler);
app.delete('/items/delete/:id', handler.deleteItemHandler);


module.exports = app;