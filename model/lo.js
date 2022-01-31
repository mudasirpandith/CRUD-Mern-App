const mongooose = require("mongoose");
const jwt = require("jsonwebtoken");
const userloginSchema = new mongooose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
userloginSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, "kejddhbejhydbegyuhv");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const UserLogin = mongooose.model("userlogin", userloginSchema);
module.exports = UserLogin;
