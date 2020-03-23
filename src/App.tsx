import React from 'react';
import './App.css';
import Routes from './pages/utils/routes';
import { Provider, rootStore } from "./models/Root";

function App() {
	return (
		<Provider value={rootStore}>
		<Routes/>
		</Provider>
	);
}

export default App;
