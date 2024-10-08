require('dotenv').config({ path: '../.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import for JWTs

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors());
app.use(express.json()); // Use only express.json() for parsing JSON

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Task Schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  category: { type: String, default: 'General' },
  userId: { type: String, required: true }, // Add userId to associate tasks with users
});

const Task = mongoose.model('Task', taskSchema);

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

// Middleware for authenticating JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // No token, unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token, forbidden
    req.user = user; // Set the user object in the request
    next(); // Continue to the next middleware/route handler
  });
};

// Routes for tasks
app.get('/api/tasks', authenticateToken, async (req, res) => { // Protect this route
  try {
    // Get tasks for the authenticated user
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to create a new task
app.post('/api/tasks', authenticateToken, async (req, res) => { // Protect this route
  const { title, category } = req.body;

  try {
    const newTask = new Task({ title, category, userId: req.user.userId }); // Associate task with user
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Error creating task. ' + error.message });
  }
});

// Endpoint to delete a task
app.delete('/api/tasks/:id', authenticateToken, async (req, res) => { // Protect this route
  const taskId = req.params.id;

  try {
    // Ensure the task belongs to the authenticated user
    const deletedTask = await Task.findOneAndDelete({ _id: taskId, userId: req.user.userId });
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Error deleting task. ' + error.message });
  }
});

// ... (your existing user routes) ...

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});