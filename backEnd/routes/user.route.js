const express = require("express");
const router = express.Router();
const {Register, Login, getUserProfile, Logout, updateProfile } = require("../controller/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");
const upload = require("../utils/multer")

router.post('/register',Register);
router.post('/login',Login);
router.get('/logout',Logout);
router.get('/profile', isAuthenticated ,getUserProfile);
router.put('/profile/update', isAuthenticated, upload.single("profilePhoto") ,updateProfile);

module.exports = router;