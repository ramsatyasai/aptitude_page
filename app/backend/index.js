const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/AptiLogicPro', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  qualification: String,
  userType:String,
  password: String,
  institution: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, userType, qualification,institution } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({ username, email, password, userType, qualification,institution });
    await newUser.save();
    
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});