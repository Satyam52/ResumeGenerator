const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const Resume = require("../models/Resume");

//route api/resume
//desc add new resume
//@view Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is Required")
        .not()
        .isEmpty(),
      check("email", "email is Required")
        .not()
        .isEmpty(),
      check("phone", "Name is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      email,
      phone,
      description,
      sclocation,
      scfrom,
      scto,
      degree,
      company,
      wrlocation,
      wrfrom,
      wrto,
      position,
      title,
      pdescription,
      skills,
      school
    } = req.body;

    const resumefield = {};
    resumefield.user = req.user.id;
    if (name) resumefield.name = name;
    if (email) resumefield.email = email;
    if (phone) resumefield.phone = phone;
    if (description) resumefield.description = description;

    //education
    resumefield.education = {};
    if (school) resumefield.education.school = school;
    if (sclocation) resumefield.education.sclocation = sclocation;
    if (scfrom) resumefield.education.scfrom = scfrom;
    if (scto) resumefield.education.scto = scto;
    if (degree) resumefield.education.degree = degree;

    //experience
    resumefield.experience = {};
    if (company) resumefield.experience.company = company;
    if (wrlocation) resumefield.experience.wrlocation = wrlocation;
    if (wrfrom) resumefield.experience.wrfrom = wrfrom;
    if (wrto) resumefield.experience.wrto = wrto;
    if (position) resumefield.experience.position = position;

    //project
    resumefield.project = {};
    if (title) resumefield.project.title = title;
    if (pdescription) resumefield.project.pdescription = pdescription;

    //skills

    if (skills) {
      resumefield.skills = req.body.skills
        .split(",")
        .map(skill => skill.trim());
    }

    try {
      let resume = new Resume(resumefield);
      await resume.save();
      res.json(resume);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

//route api/resume/:id
//desc get all resume
//@view Private
router.get("/", auth, async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

//route api/resume/:id
//desc get single resume
//@view Private
router.get("/:id", auth, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
