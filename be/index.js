import express from 'express';
import cors from 'cors';
import route from './src/routes';
import bodyParser from 'body-parser';

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

route(app);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
