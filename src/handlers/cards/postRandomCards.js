const axios = require("axios");
const URL = "https://api.magicthegathering.io/v1/cards?contains=imageUrl";
const { postCard } = require("../../controllers/Card");

const postRandomCards = async (req, res) => {
    try {
        const cartas = await axios(URL);
        const arreglo = cartas.data.cards;
        const nuevoArregloCartas = [];
        //const primeras5 = arreglo.slice(0,5);
        for (const elem of arreglo) {
            const nuevaCarta = await postCard(elem, "NM", "english", 0.50);
            nuevoArregloCartas.push(nuevaCarta);
        }
        res.status(201).send(nuevoArregloCartas);
        console.log("hecho");
    } catch (error) {
        res.status(405).send(error.message);
    }

}

module.exports = postRandomCards;