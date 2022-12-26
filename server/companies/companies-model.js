const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    name: String,
    link: String,
    industry: String,
    ceo: String,
    known_members: [String],
    technologies: [String],
    location: String,
    address: String,
    location_score: Number,
    hybridity: Number, // 0, 1, 2, 3 days weekly at home
    size: [Number], // [1,20], [20, 100], [300, 1000]
    status: String, // public, early startup, unicorn startup...
    series: String,
    funding: Number,
    salary: Number,
    title: String,
    glassdoor_score: Number,
    glassdoor_comment: String,
    isRecruting: { type: Boolean, default: true},
    score: {type: Number, default: 3}
});

const Company = mongoose.model('company', companySchema);

module.exports = Company;
