const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/:fileName")
  .get(usersController.image);

module.exports = router;