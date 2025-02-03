const jwt = require("jsonwebtoken");

const genrateToekn = async (res, user, message) => {
  const token = await jwt.sign(
    {
      userId: user._id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, //1Day
    }).json({
        success: true,
        message,
        user,
    })
}; 

module.exports = genrateToekn;
