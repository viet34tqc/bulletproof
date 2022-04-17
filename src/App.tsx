import './App.css';
import AppProvider from './provider/AppProvider';
import AppRoute from './routes/AppRoute';

function App() {
	return (
		<AppProvider>
			<AppRoute />
		</AppProvider>
	);
}

export default App;
