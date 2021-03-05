const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');
const authenticate = passport.authenticate('userStrategy', { session: false });

// Matches with "/api/books"
router.route("/login")
  .post(usersController.login)

router.route("/register")
  .post(usersController.register);

router.route("/isloggedin")
  .get(authenticate, usersController.find);
  
router.route('/allBusinesses')
  .get(usersController.allBusinesses)

router.route("/reviews")
  .post(authenticate, usersController.makeReview)
  .get(authenticate, usersController.allReviews)
  .delete(authenticate, usersController.deleteReview)
  .put(authenticate, usersController.editReview);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;