import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const BasicLayout = () => {
	return (
	  <div className="app">
		<Header />
		<Outlet />
	  </div>
	);
};

export default BasicLayout;

