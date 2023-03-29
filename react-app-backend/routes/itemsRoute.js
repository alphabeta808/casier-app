const express = require('express');
const app = express();
const handler = require('../handler');

app.get('/getAll', handler.getAllItemsHandler);
app.get('/:id', handler.getItemByIdHandler);
app.post('/add', handler.addItemsHandler);
app.put('/update/:id', handler.updateItemHandler);
app.delete('/delete/:id', handler.deleteItemHandler);


module.exports = app;