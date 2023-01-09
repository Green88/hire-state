const { getAll, getByUserName, create, update } = require('./preferences-service');

const getPreferences = async (req, res) => {
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
        res.send({ pref });
    } catch (err) {
        console.error('Could not get preference by username', err);
        res.status(err.status || 500).send(err.message);
    }
};

const createPreference = async (req, res) => {
    const { body } = req;
    const { username } = body;
    try {
        const prefByUsername = await getByUserName(username);
        if (prefByUsername) {
            const message = `Pref with username ${username} alredy exists, can't create new`;
            console.error(message);
            res.status(409).send(message);
            return;
        }
        const pref = await create(body);
        res.send(pref);
    } catch (err) {
        console.error('Could not create preference', err);
        res.status(err.status || 500).send(err.message);
    }
};

const updatePreference = async (req, res) => {
    const { body, params: {id} } = req;
    try {
        const pref = await update(id, body);
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