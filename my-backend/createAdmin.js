// createAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/UserModel');  // Ensure the path is correct based on your directory structure
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.DB_URL, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Function to create an admin user
const createAdmin = async () => {
  const adminEmail = 'obiyanezekiel77@gmail.com';
  const adminPassword = 'You123';

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(adminPassword, salt);

  const newUser = new User({
    email: adminEmail,
    password: hashedPassword,
    isAdmin: true
  });

  try {
    await newUser.save();
    console.log('Admin user created successfully');
  } catch (err) {
    console.error('Error creating admin user', err);
  }

  mongoose.disconnect();
};

createAdmin();
