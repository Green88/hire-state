import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchPreferences } from '../actions/preferences';
import { savePrefs, updatePrefs } from '../api/preferences';
import SettingsForm from '../components/settings-form/SettingsForm';
import { serializePref, deserializePref } from '../utils/preferences';
import './FormPage.scss';

const initialValues = {
    industry: [],
    technologies: [],
    location: [],
    size_min: 0,
    size_max: 0,
    hybridity: 0,
    status: [],
    salary: 0,
    title: '',
};

const SettingsPage = () => {
    const navigate = useNavigate();
    const currentUser = localStorage.getItem('user');
    const { data: prefs, isLoading, success } = useSelector(state => state.preferences);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPreferences(currentUser));
    }, [dispatch, currentUser]);

    const isNew = success && !prefs && prefs === null;
    const formPrefs = isNew ? initialValues : deserializePref(prefs);

    const sendPrefsRequest = async (serialized) => {
        try {
            if (isNew) {
                await savePrefs(serialized);
            } else {
                await updatePrefs(prefs._id, serialized);
            }
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    const onSubmit = (values) => {
        console.log('values', values);
        const serialized = serializePref(values);
        sendPrefsRequest(serialized);
    };

    if (isLoading) {
        return <CircularProgress />;
    }
    
    return (
        <div className="form-wrapper">
            <SettingsForm initialValues={formPrefs} buttonText="Save preferences" onSubmit={onSubmit} />
        </div>
    );
};

export default SettingsPage;
