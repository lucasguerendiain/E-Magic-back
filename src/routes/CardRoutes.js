const { Router } = require("express");

const {
    getAllCards,
    postRandomCards,
    getCardsByName,
    filterAdvSearch,
} = require("../controllers/Card");

const cardRouter = Router();

cardRouter.get("/", getAllCards);

cardRouter.post("/", postRandomCards);

cardRouter.get("/byName", getCardsByName);

cardRouter.post("/filtered", filterAdvSearch);

module.exports = cardRouter;