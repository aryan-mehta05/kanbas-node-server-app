import express from 'express';

import Hello from "./Hello.js";

const app = express();
app.use(express.json());

Hello(app);

app.listen(4000);
