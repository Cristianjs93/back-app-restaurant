import express from 'express';
import ConfigExpress from './config/express.ts';
import routes from './routes.ts';

const app = express();
const port = process.env.PORT || 3002;

ConfigExpress(app);
routes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
