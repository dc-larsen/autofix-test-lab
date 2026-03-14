const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Autofix test lab running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
