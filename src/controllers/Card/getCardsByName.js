const { Op } = require("sequelize");
const { Card, Stock } = require("../../db");

const getCardsByName = async (req, res) => {
    try {
        const name = req.query.name;
        const response = await Card.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%`}
            }, include: [
                { model: Stock }
            
        ]});
        if (response) return res.status(201).json(response);
        else return res.status(402).send({message: "no se encontro nada"});
    } catch(error) {
        res.status(404).json(error);
    }
}


module.exports = getCardsByName;