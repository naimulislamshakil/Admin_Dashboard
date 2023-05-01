import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './thems';
import Topbar from './pages/Navbar/Topbar';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<main className="content">
						<Topbar />
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
