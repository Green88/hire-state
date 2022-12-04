const mongoose = require('mongoose');
const { Schema } = mongoose;

const preferenceSchema = new Schema({
    username: String,
    technologies: [String],
    locations: [String],
    hybridity: Number, // 0, 1, 2, 3 days weekly at home
    company_size: [Number], // [1,20], [20, 100], [300, 1000]
    company_status: [String], // public, startup early, startup unicorn...
    salary: Number,
    title: String,
    industry: [String],
});

const Preference = mongoose.model('preference', preferenceSchema);

module.exports = Preference;
