import {
  useNavigate,
  Routes,
  Route,
  Outlet,
  BrowserRouter
} from 'react-router-dom';
import Button from '@mui/material/Button';
import MainPage from './pages/MainPage';
import AddCompanyPage from './pages/AddCompanyPage';
import EditCompanyPage from './pages/EditCompanyPage';
import POCPage from './pages/POCPage';
import './App.scss';


function BasicLayout() {
	const navigate = useNavigate();
  	const handleClick = () => {
		navigate('/poc');
  	};
	return (
	  <div className="App">
		<header className="App-header">
			<Button onClick={handleClick}>Prefs</Button>
			HIRE STATE
      	</header>
		<Outlet />
	  </div>
	)
  }

function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<BasicLayout />}>
				<Route index element={<MainPage />}/>
				<Route path="company/new" element={<AddCompanyPage />} />
				<Route path="company/:id" element={<EditCompanyPage />} />
				<Route path="poc" element={<POCPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
