const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const UserRouter = require("./routes/userroutes");
const cookieParser = require("cookie-parser");


app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://daniel:123@cluster0.t51gu.mongodb.net/UserDB?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log("DB not connected");
    } else {
      console.log("DB connected!")
    }
  }
);

app.use("/users", UserRouter)

app.listen(6060, () => {
  console.log("listening on port 6060")
});
