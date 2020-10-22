/* eslint-disable no-console */
module.exports = {
  showDate: (req, res, next) => {
    const date = new Date();
    console.info(`Date of Request on Server: ${date.getFullYear()}`);
    next();
  },
};
