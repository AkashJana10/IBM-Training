const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const signUP = async (req, res) => {
  const data = req.body;
  const { username, email, password } = data;
  console.log(username);
  console.log(email);
  console.log(password);

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(400).send({ error: err.message });
      } else {
        const userData = new userModel({ username, email, password: hash });
        await userData.save();

        return res
          .status(201)
          .send({ message: "User registered successfully" });
      }
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
module.exports = signUP;
