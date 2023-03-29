const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Port = 5000;
const itemRoute = require('./routes/itemsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// middleware
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cors({credentials : true}));
app.use(express.json());

app.use('/items', itemRoute);

app.listen(Port, () => {
console.log(`server running at ${Port}`);
});

// app.get('/', (req, res) => {
//     res.json({ info: 'Node.js, Express, and Postgres API' })
// });
