const express =require('express');
const profileControl = require('../controllers/profileControl');
const router = express.Router();

router.post("/", profileControl)



module.exports = router;