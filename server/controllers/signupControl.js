const Users = require('../model/userModel');

const signUpControl = async(req,res)=>{
  try{
    const {name, phone, email, username, password} = req.body;
    const userFound = await Users.findOne({email});
    if(userFound){
      res.status(401).json({message : "Email Already Register"});
    }else{
      const newUser = Users({
          name,
          email,
          password,
          phone,
          username
      })

      await newUser.save();
      req.session.cookie = { name: username };
      res.status(200).send("User Created Successfully");
    }
  }catch(err){
    consle.log(err);
  }
  
}

module.exports = signUpControl;