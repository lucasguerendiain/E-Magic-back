const { Router } = require("express");

const {
    getAllCards,
    getCardsByName,
    filterAdvSearch,
} = require("../controllers/Card");

const postRandomCards = require("../handlers/cards/postRandomCards");

const cardRouter = Router();

cardRouter.get("/", getAllCards);

cardRouter.post("/", postRandomCards);

cardRouter.get("/byName", getCardsByName);

cardRouter.post("/filtered", filterAdvSearch);

module.exports = cardRouter;