const express = require("express");
const router = express.Router();

const refreshTokenControllers = require("../controllers/refresh-tokens");

router.post("/", refreshTokenControllers.create);
router.get("/", refreshTokenControllers.getToken);

module.exports = router;
