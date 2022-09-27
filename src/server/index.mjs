import chalk from "chalk";
import { app } from "./app.mjs";

app.listen(process.env.PORT, () => {
  console.log(
    chalk.blue.bold(
      `Server is running ${process.env.BASE_URL}:${process.env.PORT} !`,
    ),
  );
});
