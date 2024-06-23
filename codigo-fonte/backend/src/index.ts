import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { loginUser } from './controllers/auth';
import { MONGODB_URI } from './config/envs';
import { createUser, deleteUser, updateUser } from './controllers/user';
import { authMiddleware } from './middlewares/auth';
import { errorMiddleware } from './middlewares/error';
import { createComment, createFeedback, deleteComment, deleteFeedback, getFeedbacks, getPostComments } from './controllers/comments';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('MongoDB Atlas connection error:', err);
  });

app.use(express.json());
app.post('/user', createUser);
app.post('/login', loginUser);
app.get('/comments/:postId', getPostComments);
app.post('/feedbacks', createFeedback);
app.get('/feedbacks', getFeedbacks);

// Protected routes
app.use(authMiddleware);
app.post('/comments/:postId', createComment);
app.delete('/comments', deleteComment);
app.delete('/feedbacks', deleteFeedback);
app.delete('/user/:userId', deleteUser);
app.patch('/user', updateUser);
app.use(errorMiddleware);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
