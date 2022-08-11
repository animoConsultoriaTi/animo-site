const app = require('./app');
const chalk = require('chalk');

app.listen(process.env.PORT, () => {
  console.log(
    chalk.blue.bold(
      `Server is running ${process.env.BASE_URL}:${process.env.PORT} !`,
    ),
  );
});
