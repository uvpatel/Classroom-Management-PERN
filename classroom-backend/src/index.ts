import express from 'express';
import subjectsRouter from './routes/subjects';
import cors from 'cors';

const app = express();


const frontendUrl = process.env.FRONTEND_URL;
if (!frontendUrl) {
  throw new Error('FRONTEND_URL is not set in .env file');
}

app.use(cors(
  {
    origin: frontendUrl,
    methods: ['GET' , 'POST','PUT','DELETE'],
    credentials: true
  }
))
app.use(express.json());

app.use('/api/subjects',subjectsRouter)

app.get('/', (req, res) => {
    res.send('Hello from classroom management backend!');
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`URL: http://localhost:${port}/`);
});
