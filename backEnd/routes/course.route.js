const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const { createCourse, getCreatorCourses, editCourse, getCourseById, createLecture, getCourseLectures, editLecture, getLectureById,
     removeLecture, publishCourse, getPublishedCourses } = require("../controller/course.controller");
const upload =  require("../utils/multer");

router.post('/',isAuthenticated,createCourse);
router.get('/published-courses',isAuthenticated,getPublishedCourses);
router.get('/',isAuthenticated,getCreatorCourses);
router.put('/:courseId',isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.get('/:courseId',isAuthenticated,  getCourseById);
router.post('/:courseId/lecture',isAuthenticated, createLecture);
router.get('/:courseId/lecture',isAuthenticated, getCourseLectures);
router.put('/:courseId/lecture/:lectureId',isAuthenticated, editLecture);
router.delete('/lecture/:lectureId',isAuthenticated, removeLecture);
router.route("/lecture/:lectureId").get(isAuthenticated, getLectureById);
router.patch('/:courseId',isAuthenticated, publishCourse);

module.exports = router;