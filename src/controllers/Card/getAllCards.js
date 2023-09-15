const { Card, Stock } = require("../../db");

const getAllCards = async (req, res) => {
    const dataBaseCards = await Card.findAll({
        include: [{ model: Stock}]
    });
    if (dataBaseCards){
        res.status(200).send([...dataBaseCards]);
    } else res.status(400).send({message: "base de datos vacia"});
}

module.exports = getAllCards;