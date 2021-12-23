import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMoreFeed } from '../../store/action/productAction';
import { IProduct } from '../../types/types';
import Paginate from './Paginate/Paginate';

interface IProps {
	products: IProduct[];
}

const Product = ({ products }: IProps) => {
	const productPerPage = 3;
	const totalProducts = products.length;
	const [currentPage, setCurrentPage] = useState(1);

	const urlImage = 'https://backendapi.turing.com/images/products/';
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMoreFeed(currentPage));
	}, [dispatch, currentPage]);

	return (
		<div>
			<div className="row">
				{products.map((el) => (
					<div key={el.product_id} className="col-sm-4">
						<Link to={'/' + el.product_id}>
							<div className="productCard">
								<img className="card-img-top" src={urlImage + el.thumbnail} alt="Card image cap" />
								<div className="card-body align-items-center">
									<h5 className="card-title">{el.name}</h5>
									<div>
										<div className="buttonBuy ">Buy Now</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
			{totalProducts > productPerPage && (
				<Paginate
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					totalProducts={totalProducts}
					productPerPage={productPerPage}
				/>
			)}
		</div>
	);
};
export default Product;
