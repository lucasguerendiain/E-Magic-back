/*const axios = require("axios");
const URL = "https://api.magicthegathering.io/v1/cards?contains=imageUrl";
const { Card } = require("../../db");

const postRandomCards = async () => {
    try {
        const cartas = await axios(URL);
        const arreglo = cartas.data.cards;
        for (const elem of arreglo) {
            const exist = await Card.findByPk(elem.name);
            if (exist) {
                Card.update(
                    {stock: exist.stock + 1},
                    {where: { name: exist.name } }
                ).then(count => {
                    console.log("stock actulizado", + count)
                })
            } else {
                await Card.create({
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
                } = elem);
            }
        };
        console.log("hecho");
    } catch (error) {
        throw new Error(error.message);
    }

}

module.exports = postRandomCards;*/