const { getAll, getById, create, update, updateScore } = require('./companies-service');

const getCompanies = async (reg, res) => {
    try {
        const companies = await getAll();
        res.send(companies);
    } catch (err) {
        console.error('Could not get companies', err);
        res.status(err.status || 500).send(err.message);
    }
};

const getCompanyById = async (req, res) => {
    const { params: { id }} = req;
    try {
        const company = await getById(id);
        res.send(company);
    } catch (err) {
        console.error('Could not get company by id', err);
        res.status(err.status || 500).send(err.message);
    }
};

const createCompany = async (req, res) => {
    const { body } = req;
    try {
        const company = await create(body);
        res.send(company);
    } catch (err) {
        console.error('Could not create company', err);
        res.status(err.status || 500).send(err.message);
    }
};

const updateCompany = async (req, res) => {
    const { body, params: {id} } = req;
    try {
        const company = await update(id, body);
        res.send(company);
    } catch (err) {
        console.error('Could not update company', err);
        res.status(err.status || 500).send(err.message);
    }
};

const updateCompanyScore = async (req, res) => {
    const { params: {id, username}} = req;
    try {
        const result = await updateScore(id, username);
        res.send(result);
    } catch (err) {
        console.error('Could not update company score', err);
        res.status(err.status || 500).send(err.message);
    }
};

module.exports = {
    getCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    updateCompanyScore,
};