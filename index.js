const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/category.json')
const data = require ('./data/data.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const categoryFullDetails = data.filter(
        (n) => n.id === id
    );
    res.send(categoryFullDetails)
}) 
app.get('/card-categories', (req, res) =>{
    res.send(categories)
}) 
app.listen(port, () => {
    console.log('Example app listening on port', port)
})