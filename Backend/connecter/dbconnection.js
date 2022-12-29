const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log(`successfully connected`);
  })
  .catch((err) => console.log(`no connection`));
