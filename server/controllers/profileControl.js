const Users = require("../model/userModel");
const { getToken } = require("../middleware/authToken");

const profileControl = async (req, res) => {
  try {
    const { token } = req.body;
    const userCredential = await Users.findOne({
      username: token,
    });
    if (userCredential) {
      console.log(userCredential);
      res.json({
        name: userCredential.name,
        username: userCredential.username,
        bio: userCredential.bio,
        profileUrl: userCredential.profileUrl,
        followers : userCredential.followers,
        following : userCredential.following,
        post : userCredential.post,
        success : true
      });
    } else {
      res.json({success : false});
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = profileControl;
