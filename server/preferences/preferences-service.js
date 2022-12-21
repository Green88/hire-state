const Preference = require('./preferences-model');

const getAll = () => Preference.find({});

const getById = (id) => Preference.findById(id).select('-__v');

const getByUserName = async (username) => {
    const pref = await Preference.findOne({ username }).select('-__v');
    return { pref };
};

const create = async (data) => {
    const pref = new Preference(data);
    await pref.save();
    return data;
};

const update = async (id, data) => {
    await Preference.findByIdAndUpdate(id, data);
    const newPref = await getById(id);
    return {pref: newPref};
};

module.exports = {
    getAll,
    getByUserName,
    create,
    update,
};