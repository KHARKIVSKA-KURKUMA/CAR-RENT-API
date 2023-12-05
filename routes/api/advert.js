const express = require("express");
const controllers = require(`../../controllers`);
const { controllersWrap } = require(`../../helpers`);

const router = express.Router();

router.get("/", controllersWrap(controllers.getAdvertsList));

module.exports = router;
