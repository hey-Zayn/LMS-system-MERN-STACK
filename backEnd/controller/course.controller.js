const Course = require("../models/course.model");

const createCourse = async (req, res) => {
  try {
    const { courseTitle, category } = req.body;
    if (!courseTitle || !category) {
      return res.status(400).json({
        message: "Course title and category is required.",
      });
    }
    const course = await Course.create({
      courseTitle,
      category,
      creator: req.id,
    });

    return res
      .status(201)
      .json({ success: true, course, message: "Course Created Successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create course!",
    });
  }
};

const getCreatorCourses = async (req, res) => {
  try {
    const userId = req.id;
    const courses = await Course.find({creator:userId});
    if(!courses){
      return res.status(404).json({success:false, courses:[], message:"course not found!"});
    }
    res.status(201).json({success:true, message:"Course Created Successfully", courses});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create course!",
    });
  }
};

module.exports = { createCourse, getCreatorCourses };
