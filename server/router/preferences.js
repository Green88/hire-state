const express = require('express');
const { getPreferences, getPreferenceByUsername, createPreference, updatePreference } = require('../preferences/preferences-controller');
const router = express.Router();

router.get('/', getPreferences);
router.get('/:username', getPreferenceByUsername);
router.post('/', createPreference);
router.put('/:id', updatePreference);

module.exports = router;
