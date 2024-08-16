const User = require('../src/models/Users');

const test = (req, res) => {
  res.json('test is working');
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    // check if name was entered
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    };

    // check if password is good
    if (!password || password.length < 6) {
      return res.status(400).json({ error: 'Password is required and should be 6 characters long' });
    };

    // check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    };

    // check if email is entered and unique
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: 'Email already exists' });
    };

    // create new user
    const newUser = await User.create({
      username,
      email,
      password,
    });

    return res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
};