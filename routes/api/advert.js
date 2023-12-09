const express = require("express");
const controllers = require(`../../controllers/adverts`);
const { controllersWrap } = require(`../../helpers`);
const { auth, isValidId } = require("../../middleware");

const router = express.Router();

router.get("/catalog", controllersWrap(controllers.getAdvertsList));
router.get("/", auth, controllersWrap(controllers.getUserAdverts));
router.get(
  "/:advertId",
  isValidId,
  auth,
  controllersWrap(controllers.getAdvertById)
);
router.post("/", auth, controllersWrap(controllers.addAdvert));
router.delete(
  "/:advertId",
  isValidId,
  auth,
  controllersWrap(controllers.deleteAdvert)
);
router.put(
  "/:advertId",
  isValidId,
  auth,
  controllersWrap(controllers.updateAdvert)
);

module.exports = router;
