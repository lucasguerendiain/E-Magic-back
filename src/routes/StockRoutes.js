const {Router} = require("express");

const {
    addStock,
    addReserves,
    substractStock,
    resetReserves,
    changePrice,
    cancelReserves
} = require("../controllers/Card/stock");

const stockRouter = Router();

stockRouter.post("/s", addStock);

stockRouter.post("/r", addReserves);

stockRouter.put("/s", substractStock);

stockRouter.put("/r", cancelReserves);

stockRouter.post("/", resetReserves);

stockRouter.put("/", changePrice);

module.exports = stockRouter;