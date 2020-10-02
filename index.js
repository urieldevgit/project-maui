/* eslint-disable no-console */
require('dotenv').config();
require('./database');
const { app, PORT } = require('./api');

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.info(`Running App on PORT ${PORT}`);
});
