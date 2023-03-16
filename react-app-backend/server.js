const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(express.json());


const itemRoute = require('./routes/itemsRoute');
app.use('/', itemRoute);

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.listen(Port, () => {
    console.log(`server running at ${Port}`);
});