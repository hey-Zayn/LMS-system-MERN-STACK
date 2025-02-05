const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const { createCourse, getCreatorCourses } = require("../controller/course.controller");

router.post('/',isAuthenticated,createCourse);
router.get('/',isAuthenticated,getCreatorCourses);

module.exports = router;