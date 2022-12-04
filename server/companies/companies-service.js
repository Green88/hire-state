const Company = require('./companies-model');

const getAll = () => Company.find({});

const getById = (id) => Company.findById(id);

const create = async (data) => {
    const company = new Company(data);
    await company.save();
    return data;
};

const update = async (data) => {
    const { id } = data;
    await Company.updateOne({ id }, data);
    return data;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
};

