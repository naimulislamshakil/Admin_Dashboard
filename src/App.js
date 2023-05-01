import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './thems';
import { Route, Routes } from 'react-router-dom';
import Topbar from './pages/Navbar/Topbar';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Navbar/Sidebar';

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
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
