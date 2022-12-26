const Company = require('./companies-model');
const preferencesService = require('../preferences/preferences-service');
const { calculateScore } = require('../utils/score');

const getAll = () => Company.find({});

const getById = (id) => Company.findById(id).select('-__v');

const create = async (data) => {
    const company = new Company(data);
    const newCompany = await company.save();
    return newCompany;
};

const update = async (id, data) => {
    await Company.findByIdAndUpdate(id, data);
    const updated = await getById(id);
    return updated;
};

const updateScore = async (id, username) => {
    const prefs = await preferencesService.getByUserName(username);
    const company = await getById(id);
    const score = calculateScore(company, prefs);
    const updated = await update(id, {score});
    return updated;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    updateScore,
};

