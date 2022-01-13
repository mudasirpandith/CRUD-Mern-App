const mongooose = require("mongoose");
const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },
});
const User = mongooose.model("user", userSchema);
module.exports = User;
