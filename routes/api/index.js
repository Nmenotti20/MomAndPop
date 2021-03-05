const router = require("express").Router();
const userRoutes = require("./user");
const businessRoutes = require("./business");
const postRoutes = require('./post');

// Book routes
router.use("/user", userRoutes);
router.use("/business", businessRoutes);
router.use("/post", postRoutes)

module.exports = router;