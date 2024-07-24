const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
