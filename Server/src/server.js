import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`The Backend Server is running on ${PORT}`)
})