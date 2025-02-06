const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const { createCourse, getCreatorCourses, editCourse } = require("../controller/course.controller");
const upload =  require("../utils/multer");

router.post('/',isAuthenticated,createCourse);
router.get('/',isAuthenticated,getCreatorCourses);
router.put('/:courseId',isAuthenticated, upload.single("courseThumbnail"), editCourse);

module.exports = router;