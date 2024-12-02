const jsonwebtoken = require("jsonwebtoken");
const jwt_pass = process.env.JWT_SECRET;

const check_token = (req, res, next) => {
  const exclude_path = [
    "/user/login",
    "/user/registration",
    "/user/forgot",
    "/user/reset",
  ];
  const { headers, path } = req;
  
  if (!exclude_path.includes(path)) {
   
    const { authorization } = headers;
    if (!authorization) res.status(401).send({ msg: "token missing" });
     
    const token = authorization?.split(" ");
    
    if(!token)return res.status(401).send({ msg: "invalid login" });
    jsonwebtoken.verify(token[1], jwt_pass, (err, data) => {
      if (err) res.status(401).send({ msg: "invalid login" });
    });
  }
  next();
};

const create_token = ({ data }) => {
  return jsonwebtoken.sign(data, jwt_pass, {});
};

const get_token_data = ({ headers }) => {
  
  const { authorization } = headers;
  const token = authorization.split(" ");
  let data1;
  jsonwebtoken.verify(token[1], jwt_pass, (err, data) => {
    data1 = data;
  });
  return data1;
};

module.exports = { check_token, create_token, get_token_data };
