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
  
router.route('/findBusinesses')
  .get(usersController.findBusinesses)

router.route("/reviews")
  .post(authenticate, usersController.makeReview)
  .get(authenticate, usersController.allReviews)
  .delete(authenticate, usersController.deleteReview)
  .put(authenticate, usersController.editReview);

module.exports = router;