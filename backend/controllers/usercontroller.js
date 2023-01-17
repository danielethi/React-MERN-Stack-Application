const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "dani-sec-a";


const getAllUsers = async (req, res, next) => {
  try {
    let result = await User.find();
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
};

const getUSerById = async (req, res, next) => {
  let id = req.params.id;
  try {
    const result = await User.findById(id);
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
};

const updateUserById = async (req, res, next) => {
  const id = req.params.id;
  let { username, email, password } = req.body;
  let ret = await User.findByIdAndUpdate(id, {
    username,
    email,
    password,
  });
  await ret.save();
  res.send("a record updated!");
};

const deleteUserById=async (req,res,next)=>{
       let id = req.params.id
       await User.findByIdAndDelete(id)
       res.send("Record Deleted!")
}

const registerUser = async (req, res) => {
  let { username, email, password } = req.body;
  //hashing the password
  let salting = await bcrypt.genSalt(10);
  password = await bcrypt.hash(req.body.password, salting);

  try {
    let result = new User({
      username,
      email,
      password,
    });
    await result.save();
    res.send("user created successfully !");
  } catch (err) {
    console.log(err.message);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("both fields are required");
  }
  let user = await User.findOne({ email: email });
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const accessToken = jwt.sign({ email }, secretKey, { expiresIn: "365d" });
      //   res.cookie('auth',token);
      res.send(accessToken);
    } else {
      res.send("wrong password");
    }
  } else {
    res.send("the user does not exist");
  }
};

exports.getAllUsers = getAllUsers;
exports.registerUser = registerUser;
exports.Login = Login;
exports.getUSerById = getUSerById;
exports.updateUserById = updateUserById;
exports.deleteUserById=deleteUserById
