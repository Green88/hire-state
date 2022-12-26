import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LoginModal from './LoginModal';
import './Header.scss'; 


const Header = () => {
	const currentUser = localStorage.getItem('user');
	const [user, setUser] = useState(currentUser || '');
	const handleCurrentUserChange = (username) => {
		setUser(username);
	};
    return (
        <header className="app-header">
            {user ? (
              <Link to="settings">
                <SettingsSuggestIcon sx={{cursor: 'pointer'}} />
              </Link>
            ) : <span />}
			<Link to="/">
            	<span>HIRE STATE</span>
			</Link>
            <LoginModal currentUser={user} onCurrentUserChange={handleCurrentUserChange} />
        </header>
      );
};

export default Header;