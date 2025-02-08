const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const { createCourse, getCreatorCourses, editCourse, getCourseById, createLecture, getCourseLectures } = require("../controller/course.controller");
const upload =  require("../utils/multer");

router.post('/',isAuthenticated,createCourse);
router.get('/',isAuthenticated,getCreatorCourses);
router.put('/:courseId',isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.get('/:courseId',isAuthenticated,  getCourseById);
router.post('/:courseId/lecture',isAuthenticated, createLecture);
router.get('/:courseId/lecture',isAuthenticated, getCourseLectures);

module.exports = router;