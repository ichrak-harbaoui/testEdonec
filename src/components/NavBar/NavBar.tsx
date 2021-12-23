import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct, fetchMoreFeed } from '../../store/action/productAction';

const Navbar = ({}) => {
	const [search, setSearch] = useState('');
	const handleChangeSearch = (e: { target: { value: string } }) => {
		setSearch(e.target.value);
	};
	const dispatchSearch = useDispatch();
	useEffect(() => {
		dispatchSearch(search == '' ? fetchMoreFeed(1) : searchProduct(search));
	}, [search, dispatchSearch]);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="logo" href="/">
				SHOPMATE
			</a>
			<div className="d-none d-md-none">
				<div className="leftContainer">
					<div className="search">
						<div className="searchIcon">
							<i className="fas fa-search"></i>
						</div>
						<input className="inputInput" placeholder="Search..." />
					</div>
					<span className="Icon">
						<img
							className="Icon"
							alt="Shopping Cart Icon"
							src={require('../../assets/bag.png')}
						></img>
						<span className="notificationIcon">2</span>
					</span>
				</div>
			</div>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#" style={{ color: 'white' }}>
							Women
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" style={{ color: 'white' }}>
							Men
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" style={{ color: 'white' }}>
							Kids
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" style={{ color: 'white' }}>
							Shoes
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="#" style={{ color: 'white' }}>
							Brands
						</a>
					</li>
				</ul>
			</div>

			<div className="d-none d-md-block">
				<div className="leftContainer">
					<div className="search">
						<div className="searchIcon">
							<i className="fas fa-search"></i>
						</div>

						<input
							className="inputInput"
							placeholder="Search..."
							value={search}
							onChange={handleChangeSearch}
						/>
					</div>

					<span className="Icon">
						<img
							className="Icon"
							alt="Shopping Cart Icon"
							src={require('../../assets/bag.png')}
						></img>
						<span className="notificationIcon">2</span>
					</span>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
