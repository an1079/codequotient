const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

const productsJson = fs.readFileSync('./products.json');
const products = JSON.parse(productsJson);

app.get('/', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredProducts = products.filter(product => product.Category === category);
        res.json(filteredProducts);
    } else {
        res.json(products);
    }
});
app.listen(PORT, (err) => {
    if (err) {
        console.error('unable to start server');
    } else {
        console.log('Server started...');
    }
});