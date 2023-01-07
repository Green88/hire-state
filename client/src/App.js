import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import BasicLayout from './components/BasicLayout';
import MainPage from './pages/MainPage';
import AddCompanyPage from './pages/AddCompanyPage';
import EditCompanyPage from './pages/EditCompanyPage';
import SettingsPage from './pages/SettingsPage';
import ProgressPage from './pages/ProgressPage';
import POCPage from './pages/POCPage';


function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<BasicLayout />}>
				<Route index element={<MainPage />}/>
				<Route path="company/new" element={<AddCompanyPage />} />
				<Route path="company/:id" element={<EditCompanyPage />} />
				<Route path="settings" element={<SettingsPage />} />
				<Route path="progress/:companyId" element={<ProgressPage />} />
				<Route path="poc" element={<POCPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
