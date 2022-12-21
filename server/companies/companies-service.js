const Company = require('./companies-model');

const getAll = () => Company.find({});

const getById = (id) => Company.findById(id).select('-__v');

const create = async (data) => {
    const company = new Company(data);
    await company.save();
    return data;
};

const update = async (id, data) => {
    await Company.findByIdAndUpdate(id, data);
    const updated = await getById(id);
    return updated;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
};

