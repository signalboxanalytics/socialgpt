const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const config = require('./config');
const authRoutes = require('./routes/auth');

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
//   useCreateIndex: true
});

app.use(express.json());
app.use('/auth', authRoutes);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const port = config.PORT;

app.get('/', (req, res) => {
  res.send('Welcome to SocialGPT API');
});

app.post('/test-user', async (req, res) => {
  try {
    const newUser = new User({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123'
    });

    await newUser.save();
    res.status(201).json({ message: 'Test user created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

