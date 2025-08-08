import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, department, role } = req.body;
    if (!name || !email || !password || !role || !department) {
      return res.status(400).send("Please fill all the fields");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const user = new User({
      name,
      email,
      password,
      department,
      role,
    });

    const token = user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 7 days
      sameSite: "strict",
    });

    await user.save();
    console.log("User registered:", user);
    res.status(200).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).send("Server errorrrrrrrrrrrrrrrrrrrrrr");
  }
}; // checked done

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please fill all the fields");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("User does not exist");
    }

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 7 days
      sameSite: "strict",
    });

    console.log("User logged in:", user);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send("Server errorrrrrrrrrrrrrrrrrrrrrr");
  }
}; // checked done
