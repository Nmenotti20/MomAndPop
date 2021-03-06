const router = require("express").Router();
const businessesController = require("../../controllers/businessesController");
const passport = require('passport');
const authenticate = passport.authenticate('businessStrategy', { session: false });

// Matches with "/api/books"
router.route("/login")
  .post(businessesController.login)

router.route("/register")
  .post(businessesController.register);

router.route("/isloggedin")
  .get(authenticate, businessesController.find);

router.route('/reviews')
  .get(authenticate, businessesController.allReviews);

router.route('/posts')
  .get(authenticate, businessesController.allPosts)
  .post(authenticate, businessesController.makePost)
  .delete(authenticate, businessesController.deletePost)
  .put(authenticate, businessesController.editPost);

// router.route("/makePost")
//   .post(businessesController.makePost);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;