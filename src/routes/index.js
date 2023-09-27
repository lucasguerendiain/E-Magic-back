const { Router } = require("express");
const router = Router()

const cardRouter = require("./CardRoutes");

const stockrouter = require("./StockRoutes");

//Cards

router.use("/cards", cardRouter);

//Stocks

router.use("/stocks", stockrouter);


module.exports = router;