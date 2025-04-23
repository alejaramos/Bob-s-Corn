const express = require('express')
const { initializeDatabase } = require('./config/dbConfig');

require('dotenv').config();

const app = express()

app.use(express.json());

(async () => {
    await initializeDatabase();
})();

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})