import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

console.log(process.env.DB_CONNECTION);
mongoose
  .connect(
    process.env.DB_CONNECTION.replace("<password>", process.env.DB_PASSWORD)
  )
  .then(() => {
    const port = 3000;
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
