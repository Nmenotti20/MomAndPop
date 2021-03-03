const router = require("express").Router();
const userRoutes = require("./user");
const businessRoutes = require("./business");

// Book routes
router.use("/user", userRoutes);
router.use("/business", businessRoutes)

module.exports = router;