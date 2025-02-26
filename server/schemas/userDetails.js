
const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    nick: String,
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);