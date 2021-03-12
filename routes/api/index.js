const router = require("express").Router();
const userRoutes = require("./user");
const businessRoutes = require("./business");
const postRoutes = require('./post');
const uploadsRoutes = require('./uploads')

// Book routes
router.use("/user", userRoutes);
router.use("/business", businessRoutes);
router.use('/uploads', uploadsRoutes)
router.use("/post", postRoutes)

module.exports = router;