const {Card, Stock} = require("../../db");

const addStock = async (req, res) => {
    try {
        const {name, setName, quantity, language, condition, price} = req.body;
        const find = await Card.findOne({
            where: {
                name: name,
                setName: setName
            }, include: [
                {model: Stock}
            
        ]});
        const stocks = await find.getStocks();
        let buleanFind = false;
        for (let i = 0; i < stocks.length; i++) {
            if (stocks[i].dataValues.condition === condition && stocks[i].dataValues.language === language) {
                find.stocks[i].update({stockNumber: stocks[i].dataValues.stockNumber + quantity});
                buleanFind = true
            }
        }
        if (!buleanFind) {
            const newStock = await Stock.create({
                condition: condition,
                language: language,
                price: price,
                cardName: name,
                cardSetname: setName
            });
            find.addStock(newStock);
        }
        res.status(200).json(find);
    } catch(error) {
        res.status(403).send(error.message);
    }
};

const resetReserves = async (req, res) => {
    try {
        const {name, setName} = req.body;
        const find = await Card.findOne({
            where: {
                name: name,
                setName: setName
            }, include: [
                {model: Stock}
        ]});
        if (find) {
            const stocks = await find.getStocks();
            for (let i = 0; i < stocks.length; i++) {
                find.stocks[i].update({stockNumber: stocks[i].dataValues.stockNumber + stocks[i].dataValues.inReserve});
                find.stocks[i].update({inReserve: 0});
            }
            res.status(202).json(find);
        } else res.status(405).send({message: "no se encontro la carta"});
    } catch(error) {
        res.status(403).send(error.message);
    }
};

const addReserves = async (req, res) => {
    try {
        const {name, setName, condition, language, quantity} = req.body;
        const find = await Card.findOne({
            where: {
                name: name,
                setName: setName
            }, include: [
                {model: Stock}
            
        ]});
        const stocks = await find.getStocks();
        for (let i = 0; i < stocks.length; i++) {
            if (stocks[i].dataValues.condition === condition && stocks[i].dataValues.language === language) {
                if (stocks[i].dataValues.stockNumber - quantity < 0) return res.status(406).send({message: "no hay stock disponible"});
                find.stocks[i].update({
                    stockNumber: stocks[i].dataValues.stockNumber - quantity,
                    inReserve: stocks[i].dataValues.inReserve + quantity
                });
            }
        }
        res.status(203).send(find);
    } catch(error) {
        res.status(403).send(error.message);
    }
};

const cancelReserves = async (req, res) => {
    try {
        const {name, setName, condition, language, quantity} = req.body;
        const find = await Card.findOne({
            where: {
                name: name,
                setName: setName
            }, include: [
                {model: Stock}
            
        ]});
        const stocks = await find.getStocks();
        for (let i = 0; i < stocks.length; i++) {
            if (stocks[i].dataValues.condition === condition && stocks[i].dataValues.language === language) {
                find.stocks[i].update({
                    stockNumber: stocks[i].dataValues.stockNumber + quantity,
                    inReserve: stocks[i].dataValues.inReserve - quantity
                });
            }
        }
        res.status(203).send(find);
    } catch(error) {
        res.status(403).send(error.message);
    }
};

const substractStock = async (req, res) => {
    try {
        const {name, setName, condition, language, quantity} = req.body;
        const find = await Card.findOne({
            where: {
                name: name,
                setName: setName
            }, include: [
                {model: Stock}
            
        ]});
        const stocks = await find.getStocks();
        for (let i = 0; i < stocks.length; i++) {
            if (stocks[i].dataValues.condition === condition && stocks[i].dataValues.language === language) {
                if (stocks[i].dataValues.stockNumber - quantity < 0) return res.status(406).send({message: "estas sacando mas de lo que existe"});
                find.stocks[i].update({stockNumber: stocks[i].dataValues.stockNumber - quantity});
            }
        }
        res.status(203).send(find);
    } catch(error) {
        res.status(403).send(error.message);
    }
};

const changePrice = async (req, res) => {
    try {
        const {name, setName, condition, language, newPrice} = req.body;
        const find = await Card.findOne({
            where: {
                name: name,
                setName: setName
            }, include: [
                {model: Stock}
            
        ]});
        const stocks = await find.getStocks();
        for (let i = 0; i < stocks.length; i++) {
            if (stocks[i].dataValues.condition === condition && stocks[i].dataValues.language === language) {
                find.stocks[i].update({price: newPrice});
            }
        }
        res.status(203).send(find);
    } catch(error) {
        res.status(403).send(error.message);
    }
};

module.exports = {
    addStock,
    addReserves,
    substractStock,
    resetReserves,
    changePrice,
    cancelReserves
}