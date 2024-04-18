import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
// import { exsistingUser, user} from "../service/userService.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, mobileNumber, password } = req.body;
    //Validation
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "E-mail is required" });
    }
    if (!mobileNumber) {
      return res.send({ message: "Mobile number is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    // Check for exsisting user
    const exsistingUser = await userModel.findOne({ email });
    if (exsistingUser) {
      return res.status(200).send({
        success: false,
        message: "Account already exsists please login",
      });
    }
    // register user
    // exsistingUser()
    const hashedPassword = await hashPassword(password);
    //Saving user
    const user = await new userModel({
      name,
      email,
      mobileNumber,
      password: hashedPassword,
    }).save();
    res.status(200).send({
      success: true,
      message: "Account created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating account ",
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //Check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registered",
      });
    }
    //Decrypting the passord and comparing it
    // user()
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: true,
        message: "Invalid password",
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(200).send({
      success: true,
      message: "Logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login please enter valid credentials",
    });
  }
};
export const testController=(req,res)=>{
    res.send("Protected Route")
}