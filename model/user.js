const mongooose = require("mongoose");
const userSchema = new mongooose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const User = mongooose.model("user", userSchema);
module.exports = User;
