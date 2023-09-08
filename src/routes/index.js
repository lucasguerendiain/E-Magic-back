const { Router } = require("express");
const router = Router()

const cardRouter = require("./CardRoutes");

//Cards

router.use("/cards", cardRouter);


module.exports = router;