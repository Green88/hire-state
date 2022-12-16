import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Header.scss'; 

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
		navigate('/poc');
  	};
    return (
        <header className="app-header">
            <Button onClick={handleClick}>Prefs</Button>
            <span>HIRE STATE</span>
            <span />
        </header>
      );
};

export default Header;