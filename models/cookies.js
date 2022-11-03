const mongoose = require("mongoose");

const schema = mongoose.Schema;
const cookiesSchema = new schema({
  url : { type: String },
  domain: { type: String },
  cookie: { type: Object },
  belongTo: { type: schema.Types.ObjectId, ref: "users" },
});
module.exports = mongoose.model("cookies", cookiesSchema);
