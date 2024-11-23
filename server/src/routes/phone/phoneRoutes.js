
const express = require('express');
const PhoneController = require('../../controllers/phoneController');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, PhoneController.getPhoneList);

module.exports = router;