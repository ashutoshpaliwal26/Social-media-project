const Users = require('../model/userModel');
const {setToken} = require('../middleware/authToken');

async function loginControl(req, res) {
  try {
    const { username, password } = req.body;
    const userFound = await Users.findOne({username, password});
    if(userFound){
      const token = setToken({
        username : username
      });
      res.status(200).json({
        token : token,
        success : true,
      });
    }else{
      res.status(401).json({success : false});
    }
    
  } catch (err) {
    console.log(err);
  }
}


module.exports = loginControl;