const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');
const authenticate = passport.authenticate('userStrategy', { session: false });
const upload = require('../../config/middleware/multer');


// Matches with "/api/books"
router.route("/login")
  .post(usersController.login)

router.route("/register")
  .post(upload.single('picture'), usersController.register);

router.route("/isloggedin")
  .get(authenticate, usersController.find);


  
router.route('/findBusinesses/:search/:zip')
  .get(usersController.findBusinesses)

router.route('/findAllBusinesses')
  .get(usersController.findAllBusinesses)

router.route("/reviews")
  .post(authenticate, usersController.makeReview)
  .get(authenticate, usersController.allReviews)
  .delete(authenticate, usersController.deleteReview)
  .put(authenticate, usersController.editReview);

router.route("/posts")
  .get(usersController.allPosts);

router.route('/findOneUser')
  .get(authenticate, usersController.findOneUser)
  .put(authenticate, usersController.updateUser);   

module.exports = router;