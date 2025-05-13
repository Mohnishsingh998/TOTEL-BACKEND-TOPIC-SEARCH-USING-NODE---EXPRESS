const express = require("express");
const router = express.Router();
const { getTopic } = require("../controllers/topicController");

router.get("/", getTopic);

module.exports = router;
