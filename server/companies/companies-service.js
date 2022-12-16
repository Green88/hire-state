const Company = require('./companies-model');

const getAll = () => Company.find({});

const getById = (id) => Company.findById(id).select('-__v');

const create = async (data) => {
    const company = new Company(data);
    await company.save();
    return data;
};

const update = async (id, data) => {
    console.log('id', id);
    console.log('data', data);
    await Company.findByIdAndUpdate(id, data);
    const updated = await getById(id);
    console.log(updated);
    return updated;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
};

