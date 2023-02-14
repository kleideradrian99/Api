const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const { validatorCrateItem } = require("../validators/tracks");
const { getItems, getItem, createItem } = require("../controllers/tracks");

router.get("/", getItems);

router.post("/", validatorCrateItem, createItem);

module.exports = router