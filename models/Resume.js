const mongoose = require("mongoose");
const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  education: {
    school: {
      type: String
    },
    sclocation: {
      type: String
    },
    scfrom: {
      type: Date
    },
    scto: {
      type: Date
    },
    degree: {
      type: String
    }
  },
  experience: {
    company: {
      type: String
    },
    wrlocation: {
      type: String
    },
    wrfrom: {
      type: Date
    },
    wrto: {
      type: Date
    },
    position: {
      type: String
    }
  },
  project: {
    title: {
      type: String
    },
    pdescription: {
      type: String
    }
  },
  skills: {
    type: [String]
  }
});

module.exports = Resume = mongoose.model("resume", ResumeSchema);
