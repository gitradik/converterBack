const express = require('express');
const router = require('./router/index');
const cors = require('cors');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT);


