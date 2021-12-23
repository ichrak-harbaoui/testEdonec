import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Navbar from './components/NavBar/NavBar';
const App = () => (
	<>
		<Navbar />

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:product_id" element={<ProductInfo />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
