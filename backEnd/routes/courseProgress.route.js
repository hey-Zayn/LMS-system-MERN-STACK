const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const { getCourseProgress, updateLectureProgress, markCourseAsCompleted, markAsInCompleted } = require("../controller/courseProgress.controller");



router.get("/:courseId",isAuthenticated,getCourseProgress);
router.post("/:courseId/lecture/:lectureId/view",isAuthenticated,updateLectureProgress);
router.post("/:courseId/complete",isAuthenticated,markCourseAsCompleted);
router.post("/:courseId/incomplete",isAuthenticated,markAsInCompleted);

// router.route("/:courseId").get(isAuthenticated, getCourseProgress);
// router.route("/:courseId/lecture/:lectureId/view").post(isAuthenticated, updateLectureProgress);
// router.route("/:courseId/complete").post(isAuthenticated, markCourseAsCompleted);
// router.route("/:courseId/incomplete").post(isAuthenticated, markAsInCompleted);

module.exports = router;




