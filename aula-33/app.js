const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

app.use(express.json())

app.get('/pokes', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
        if (response.data.results.length == 0) {
            res.status(404).send('Nenhum pokemon foi encontrado');
        }

        res.status(200).send(response.data);

    }).catch((error) => {
        console.log(error);
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})