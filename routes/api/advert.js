const express = require("express");
const controllers = require(`../../controllers`);
const { controllersWrap } = require(`../../helpers`);
const isValidId = require("../../middleware/isValidId");

const router = express.Router();

router.get("/", controllersWrap(controllers.getAdvertsList));
router.get("/:advertId", isValidId, controllersWrap(controllers.getAdvertById));
router.post("/", controllersWrap(controllers.addAdvert));
router.delete(
  "/:advertId",
  isValidId,
  controllersWrap(controllers.deleteAdvert)
);
router.put("/:advertId", isValidId, controllersWrap(controllers.updateAdvert));

module.exports = router;
