const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const categories = require('./data/data.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/card-categories', (req, res) =>{
    res.send(categories)
}) 
app.listen(port, () => {
    console.log('Example app listening on port', port)
})