const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  vendor: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  },
  roleName: {
    type: String
  },
  endClient: {
    type: String
  },
  location: {
    type: String
  },
  roleDesc: {
    type: String
  },
  qualifications: {
    type: String
  },
  preferredSkills: {
    type: String
  }
});

module.exports = Role = mongoose.model("role", RoleSchema);
