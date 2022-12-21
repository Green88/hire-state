import axios from 'axios';

const PREFERENCES_BASE_URL = '/api/prefs';

export const fetchPrefs = (username) => axios.get(`${PREFERENCES_BASE_URL}/${username}`);

export const savePrefs = (prefs) => axios.post(PREFERENCES_BASE_URL, prefs);

export const updatePrefs = (id, prefs) => axios.put(`${PREFERENCES_BASE_URL}/${id}`, prefs);