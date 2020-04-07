const mongoose = require("mongoose");

const MakerSchema = new mongoose.Schema({
  Capacity_maker: Number,
  Material: String,
  Location: String
});
const DesignerSchema = new mongoose.Schema({
  Capacity_des: Number,

  Type_of_designer: String,
  Training: String
});

const Designer = mongoose.model("Designer", DesignerSchema);
const Maker = mongoose.model("Maker", MakerSchema);

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    role: {
      type: String
    },
    designer: {
      Capacity_des: Number,
      Type_of_designer: String,
      Training: String
    },
    maker: {
      Capacity_maker: Number,
      Material: String,
      Location: String
    },
    links: {
      type: Array
    }
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

module.exports = { Maker, Designer, User };
