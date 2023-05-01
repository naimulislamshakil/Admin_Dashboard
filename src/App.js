import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './thems';
import { Route, Routes } from 'react-router-dom';
import Topbar from './pages/Navbar/Topbar';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Navbar/Sidebar';
import Team from './pages/Team';
import Contacts from './pages/Contacts';
import Invoices from './pages/Invoices';
import Bar from './pages/Bar';
import Pie from './pages/Pie';
import Line from './pages/Line';
import FAQ from './pages/FAQ';
import Calendar from './pages/Calendar';
import Geography from './pages/Geography';
import Form from './pages/Form';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar />
					<main className="content">
						<Topbar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/team" element={<Team />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/form" element={<Form />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/line" element={<Line />} />
							<Route path="/faq" element={<FAQ />} />
							<Route path="/calendar" element={<Calendar />} />
							<Route path="/geography" element={<Geography />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
