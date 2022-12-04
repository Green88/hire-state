const { getAll, getByUserName, create, update } = require('./preferences-service');

const getPreferences = async (reg, res) => {
    try {
        const prefs = await getAll();
        res.send(prefs);
    } catch(err) {
        console.error('Could not get all preferences', err);
        res.status(err.status || 500).send(err.message);
    }
    
};

const getPreferenceByUsername = async (req, res) => {
    const { params: { username }} = req;
    try {
        const pref = await getByUserName(username);
        res.send(pref);
    } catch (err) {
        console.error('Could not get preference by username', err);
        res.status(err.status || 500).send(err.message);
    }
};

const createPreference = async (req, res) => {
    const { body } = req;
    try {
        const pref = await create(body);
        res.send(pref);
    } catch (err) {
        console.error('Could not create preference', err);
        res.status(err.status || 500).send(err.message);
    }
};

const updatePreference = async (req, res) => {
    const { body } = req;
    try {
        const pref = await update(body);
        res.send(pref);
    } catch (err) {
        console.error('Could not update preference', err);
        res.status(err.status || 500).send(err.message);
    }
};

module.exports = {
    getPreferences,
    getPreferenceByUsername,
    createPreference,
    updatePreference,
};