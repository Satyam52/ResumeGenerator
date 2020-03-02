const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

//@Get /api/auth
//@desc get user
//@access Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@Post /api/auth
//@desc login user
//@access Public

router.post(
  "/",
  [
    check("email", "Please Enter a valid email")
      .not()
      .isEmpty(),
    check("password", "Password should be 6 or more character").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { password, email } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(500).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 60 * 24 * 24 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(error);
    }
  }
);

module.exports = router;
