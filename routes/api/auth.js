const express = require("express");
const ctrl = require(`../../controllers/auth`);
const { controllersWrap } = require(`../../helpers`);
const auth = require(`../../middleware/auth`);

const router = express.Router();

router.post("/register", controllersWrap(ctrl.register));

router.post("/login", controllersWrap(ctrl.login));

router.get("/current", auth, controllersWrap(ctrl.getCurrent));

router.post("/logout", auth, controllersWrap(ctrl.logout));

module.exports = router;
