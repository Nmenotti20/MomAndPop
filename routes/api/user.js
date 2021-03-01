const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');

// Matches with "/api/books"
router.route("/login")
  .get(usersController.login)

router.route("/register")
  .post(usersController.register);

router.route("/isloggedin")
  .get(passport.authenticate('jwt', { session: false }), usersController.find);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;