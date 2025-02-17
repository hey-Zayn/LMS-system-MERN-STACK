const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const genrateToekn = require("../utils/genrateToekn");
const { deleteMediaFromCloudinary, uploadMedia } = require("../utils/cloudinary");

const Register = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;
    if (!name || !userName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already Exist" });
    }
    const hasPassword = await bcrypt.hash(password, 10);
    // You can simplify user creation:
    const register = await User.create({
      name, 
      userName,
      email,
      password: hasPassword,
    });
    // No need to call save() again, it's done in create()
    res
      .status(201)
      .json({ success: true, message: "Account Create Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to register", error });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Email or Password" }); 
    }
    // Ensure the welcome message is a string:
    genrateToekn(res, user, `Welcome ${user.name}`);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to login", error });
  }
};

const Logout = async (_,res) => {
  try {
      return res.status(200).cookie("token", "", {maxAge:0}).json({
          message:"Logged out successfully.",
          success:true
      })
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          success:false,
          message:"Failed to logout"
      }) 
  }
}

const getUserProfile = async (req,res) => {
  try {
      const userId = req.id;
      const user = await User.findById(userId).select("-password").populate("enrolledCourses");
      if(!user){
          return res.status(404).json({
              message:"Profile not found",
              success:false
          })
      }
      return res.status(200).json({
          success:true,
          user
      })
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          success:false,
          message:"Failed to load user"
      })
  }
};

const updateProfile = async (req,res) => {
  try {
      const userId = req.id;
      const {name} = req.body;
      const profilePhoto = req.file;

      const user = await User.findById(userId);
      if(!user){
          return res.status(404).json({
              message:"User not found",
              success:false
          }) 
      }
      // extract public id of the old image from the url is it exists;
      if(user.photoUrl){
          const publicId = user.photoUrl.split("/").pop().split(".")[0]; // extract public id
          deleteMediaFromCloudinary(publicId);
      }

      // upload new photo
      const cloudResponse = await uploadMedia(profilePhoto.path);
      const photoUrl = cloudResponse.secure_url;

      const updatedData = {name, photoUrl};
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {new:true}).select("-password");

      return res.status(200).json({
          success:true,
          user:updatedUser,
          message:"Profile updated successfully."
      })

  } catch (error) {
      console.log(error);
      return res.status(500).json({
          success:false,
          message:"Failed to update profile"
      })
  }
};

module.exports = { Register, Login, getUserProfile, Logout, updateProfile };
