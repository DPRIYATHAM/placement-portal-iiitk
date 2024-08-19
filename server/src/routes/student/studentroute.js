const express = require('express');
const router = express.Router();
const driveroute =  require("./drive")
const profilerooute = require("./profile")

router.use("/drive",driveroute)
router.use("/profile",profilerooute)


module.exports = router;

