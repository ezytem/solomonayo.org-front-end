// pushBlogsToDatabase.js
const mongoose = require('mongoose');
const blogs = require('./dummydata'); // Ensure the path is correct
const Blog = require('./models/blogModel');

const dbURI = 'mongodb+srv://solomonayo:Jd3midpxBTjjjm7p@ezytem1.geif8hq.mongodb.net/blog?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    pushBlogs();
  })
  .catch(err => {
    console.log('Could not connect to MongoDB', err);
  });

async function pushBlogs() {
  try {
    for (const blog of blogs) {
      const existingBlog = await Blog.findOne({ id: blog.id });
      if (existingBlog) {
        await Blog.updateOne({ id: blog.id }, blog);
        console.log(`Blog "${blog.title}" updated in the database.`);
      } else {
        await Blog.create(blog);
        console.log(`Blog "${blog.title}" saved to the database.`);
      }
    }
  } catch (err) {
    console.error('Error pushing blogs to the database', err);
  } finally {
    mongoose.connection.close();
  }
}
