const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Role = require("../../models/role");

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newRole = new Role({
      vendor: req.body.vendor,
      date: req.body.date,
      roleName: req.body.roleName,
      endClient: req.body.endClient,
      location: req.body.location,
      roleDesc: req.body.roleDesc,
      qualifications: req.body.qualifications,
      preferredSkills: req.body.preferredSkills
    });

    newRole.save().then(role => res.json(role));
  }
);

module.exports = router;
