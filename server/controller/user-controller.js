import User from "../model/user-schema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


export const userSignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const newUser = new User({
      username: request.body.username,
      password: hashedPassword,
      email: request.body.email,
    });

    await newUser.save();
    response.status(200).json({ message: "User created successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username });

    if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {

            const genToken = jwt.sign({ userID: user._id },process.env.JWT_SECRET, { expiresIn: "1h" });
            user.save();
            return response.status(200).json({ user: { id: user._id, email: user.email, username: user.username }, token: genToken })
            
        } else {
            return response.status(401).json({message:"invalid login credentials"});
        }
    } else {
        return response.status(401).json({message:"server error"});
    }

    // if (user) {
    //   return response.status(200).json(`${username} successfully login`);
    //   // return response.status(200).json({data:user},"login successful")
    // } else {
    //   return response.status(401).json("Invalid login");
    // }
  } catch (error) {
    return response.status(500).json({"server error": error.message});
  }
};




export const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    
    if (!isValidObjectId(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    
    const user = await User.findById(userId, { password: 0 });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

