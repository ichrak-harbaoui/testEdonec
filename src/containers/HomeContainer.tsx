import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import { RooteState } from '../store';
import FilterContainer from './FilterContainer';
import { useSelector } from 'react-redux';

const HomeContainer = () => {
	const { products, count } = useSelector((state: RooteState) => state.product);
	return (
		<div>
			<div className="homeContainer">
				<div
					className="imageContainer "
					style={{
						backgroundImage: 'url(' + 'assets/Images-modal.png' + ')',
					}}
				></div>
				<div className="row" style={{ margin: '1em' }}>
					<div className="w-25">
						<FilterContainer />
					</div>
					<div className="w-75">
						<ProductList products={products} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContainer;
