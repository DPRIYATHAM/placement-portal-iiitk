const mongoose = require('mongoose');

const round = new mongoose.Schema({
  round_number: { type: Number, required: true, min: 1 },
  round_name: { type: String, required: true },
  description: { type: String, required: true },
});

const criteria = new mongoose.Schema({
    tenth_percentage: { type: Number, required: false, min: 0, max: 100 },
    twelfth_percentage: { type: Number, required: false, min: 0, max: 100 },
    // graduation_percentage: { type: Number, required: true, min: 0, max: 100 },
    graduation_degree: { type: String, required: false, default: 'B.Tech' },
    graduation_year: { type: Number, required: false, minlength: 4, maxlength: 4 },
    cgpa: { type: Number, required: false, min: 0, max: 10 },
    stream: { type: [String], required: false, default: 'ALL', enum: ['ALL', 'CSE', 'ECE', 'AIDS', 'CSY'] },
    work_experience_count: { type: Number, required: false, min: 0 , default: 0},
});

const drive = new mongoose.Schema({
  drive_name: { type: String, required: true, unique: true },
  company_name: { type: String, required: true },
  company_logo: { type: mongoose.SchemaTypes.Url, required: false },  // URL to company logo
  about: { type: String, required: false },
  type_of_role: { type: String, required: true, enum: ['Internship', 'Full-time' , 'Internship + PPO' , 'PPO'] },
  location: { type: [String], required: true },
  ctc: { type: String, required: true, min: 0 },
  duration: { type: String, required: true },  // e.g., "6 months", "Full-time"
  number_of_positions: { type: Number, required: true, min: 1 },
  deadline: { type: Date, required: true },
  drive_date: { type: Date, required: true },
  rounds: { type: [round], required: true },
  criteria: { type: criteria, required: true },
});

const Drive = mongoose.model('Drive', driveSchema);

module.exports = Drive;
