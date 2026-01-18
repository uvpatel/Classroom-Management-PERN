import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from classroom management backend!');
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`URL: http://localhost:${port}/`);
});
