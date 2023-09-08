const { Card } = require("../../db");

const getAllCards = async (req, res) => {
    const dataBaseCards = await Card.findAll();
    if (dataBaseCards){
        res.status(200).send([...dataBaseCards]);
    } else res.status(400).send({error: "base de datos vacia"});
}

module.exports = getAllCards;