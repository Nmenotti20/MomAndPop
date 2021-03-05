const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');
const authenticate = passport.authenticate('userStrategy', { session: false });

// Matches with "/api/books"
router.route("/login")
  .get(usersController.login)

router.route("/register")
  .post(usersController.register);

router.route("/isloggedin")
  .get(authenticate, usersController.find);

router.route("/makeReview")
  .post(authenticate, usersController.makeReview);
router.route('/allBusinesses')
  .get(usersController.allBusinesses)

router.route("/reviews")
  .get(authenticate, usersController.allReviews);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;