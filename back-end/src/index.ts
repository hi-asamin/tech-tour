import express from "express";
import * as router from './routes/index';
import { json, urlencoded } from 'body-parser';

const app = express();
const port = 3000;

// bodyがundefinedにならないように
app.use(urlencoded({ extended: false }));
app.use(json());

app.listen(
  port,
  (): void => {
    console.log("listening on port 3000");
  }
);
router.initRoutes(app);

export default app;