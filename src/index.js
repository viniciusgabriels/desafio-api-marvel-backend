import express from 'express';
import cors from 'cors';
import routes from './router';

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.listen(port);
