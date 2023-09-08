const { Router } = require("express");

const {
    getAllCards,
    postRandomCards,
    getCardsByName,
} = require("../controllers/Card");

const cardRouter = Router();

cardRouter.get("/", getAllCards);

cardRouter.post("/", postRandomCards);

cardRouter.get("/byName", getCardsByName);

module.exports = cardRouter;