const jwt = require('jsonwebtoken');
const secrete = 'a$huto$h';
const setToken = (userData)=>{
  return jwt.sign(userData, secrete);
}

const getToken = (token)=>{
  if(!token){
    return null;
  }
  return jwt.verify(token, secrete);
}

module.exports = {
  setToken, 
  getToken
}