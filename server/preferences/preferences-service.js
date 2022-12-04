const Preference = require('./preferences-model');

const getAll = () => Preference.find({});

const getByUserName = async (username) => {
    const pref = await Preference.findOne({ username });
    return pref;
};

const create = async (data) => {
    const pref = new Preference(data);
    await pref.save();
    return data;
};

const update = async (data) => {
    const { id } = data;
    await Preference.updateOne({ id }, data);
    return data;
};

module.exports = {
    getAll,
    getByUserName,
    create,
    update,
};