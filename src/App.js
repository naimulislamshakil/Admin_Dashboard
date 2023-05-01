import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './thems';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<main className="context"></main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
