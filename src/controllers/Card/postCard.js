const { Card, Stock } = require("../../db");

const postCard = async (carta, estado, lenguaje, precio) => {
    try {
        const exist = await Card.findOne({
            where: {
                name: carta.name,
                setName: carta.setName
            }, include: [
                { model: Stock}
        ]});
        if (exist) {
            const arregloStocks = await exist.getStocks();
            var bulean = false;
            for (let i = 0; i < arregloStocks.length; i++) {
                if (arregloStocks[i].dataValues.condition === estado && arregloStocks[i].dataValues.language === lenguaje) {
                    exist.stocks[i].update({stockNumber: arregloStocks[i].dataValues.stockNumber + 1});
                    bulean = true;
                }
            }
            if (!bulean) {
                const newStock = await Stock.create({
                    condition: estado,
                    language: lenguaje,
                    price: precio,
                    cardName: carta.name,
                    cardSetname: carta.setName
                });
                exist.addStock(newStock);
            }
            return exist;
        } else {
            const newCard = await Card.create({
                name,
                manaCost,
                cmc,
                colors,
                type,
                types,
                subtypes,
                rarity,
                set,
                setName,
                text,
                artist,
                number,
                power,
                toughness,
                layout,
                multiverseId,
                imageUrl,
                printings,
                id
            } = carta);
            const newStock = await Stock.create({
                condition: estado,
                language: lenguaje,
                price: precio,
                cardName: carta.name,
                cardSetname: carta.setName
            });
            await newCard.addStock(newStock);
            return newCard;
        }  
    } catch(error) {
        throw new Error(error);
    }
}

module.exports = postCard;