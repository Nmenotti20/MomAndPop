const router = require("express").Router();
const businessesController = require("../../controllers/businessesController");
const passport = require('passport');

// Matches with "/api/books"
router.route("/login")
  .get(businessesController.login)

router.route("/register")
  .post(businessesController.register);

router.route("/isloggedin")
  .get(passport.authenticate('businessStrategy', { session: false }), businessesController.find);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;