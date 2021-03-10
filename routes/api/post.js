const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/books"
router.route("/")
  .get(postsController.findAll)

// router.route("/makePost")
//   .post(postsController.makePost);

// router.route("/isloggedin")
//   .get(passport.authenticate('businessStrategy', { session: false }), businessesController.find);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;