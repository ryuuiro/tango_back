import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', router);

app.listen(port);
console.log(`API listening port: ${port}`);
