const express = require('express');
const router = express.Router();
const driveroute =  require("./drive")
const profilerooute = require("./profile")
const register = require("./registration")
router.use("/drive",driveroute)
router.use("/profile",profilerooute)
router.use("/register",register)

module.exports = router;
