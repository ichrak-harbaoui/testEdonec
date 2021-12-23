import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { RooteState } from '../../store';
import { getProductById } from '../../store/action/productAction';
import { Loader } from '../Loader/Loader';

const ProductInfo = () => {
	const params = useParams();
	const urlImage = 'https://backendapi.turing.com/images/products/';
	const dispatch = useDispatch();
	const { selectedProduct, isLoading } = useSelector((state: RooteState) => state.product);
	const sizes = [
		{ title: 'XS', checked: false },
		{ title: 'S', checked: false },
		{ title: 'M', checked: false },
		{ title: 'L', checked: false },
		{ title: 'XL', checked: false },
	];
	const [sizesstate, setstate] = useState(sizes);

	useEffect(() => {
		dispatch(getProductById(Number(params.product_id)));
	}, [dispatch]);
	if (!selectedProduct || isLoading) return <Loader />;

	return (
		<div>
			<div className="m-5     position-relative">
				<div className="flex flex-wrap shadow">
					<div className="row p-5">
						<div className="col-5 px-5">
							<Carousel showIndicators={false}>
								<div>
									<img src={urlImage + selectedProduct.thumbnail} alt="img"></img>
								</div>
								<div>
									<img src={urlImage + selectedProduct.image} alt="img"></img>
								</div>
								<div>
									<img src={urlImage + selectedProduct.image_2} alt="img"></img>
								</div>
							</Carousel>
						</div>
						<div className="col-6">
							<div
								className="w-full h-8 withRouter-Connect-Product---breadcrumbsText-257"
								style={{ color: '#B4B4B4' }}
							>
								Home
								<span className="ml-4"></span> • <span className="ml-4"></span> All Categories{' '}
								<span className="ml-4"></span> • <span className="ml-4"></span> Men's Clothing and
								Accesories
							</div>
							<div className="d-flex justify-content-between align-items-center">
								<div className="ratings">
									<i className="fa fa-star rating-color"></i>{' '}
									<i className="fa fa-star rating-color"></i>{' '}
									<i className="fa fa-star rating-color"></i>{' '}
									<i className="fa fa-star rating-color"></i> <i className="fa fa-star"></i>{' '}
								</div>
							</div>
							<div className="" style={{ fontSize: '30px' }}>
								{selectedProduct.name}
							</div>
							<div className="" style={{ fontSize: '30px', color: '#f62f5e' }}>
								{'$' + selectedProduct.price}
							</div>
							<div>
								<div className="color-block">Sizes</div>
								{sizesstate.map((el) => (
									<span
										style={{
											backgroundColor: el.checked ? '#f62f5e' : '#efefef',
											color: el.checked ? 'white' : 'black',
										}}
										onClick={() => {
											const findsize = sizesstate.findIndex((siz) => siz.title === el.title);
											const newobject = sizesstate.map((size) => {
												if (size.title === el.title)
													return { title: size.title, checked: !size.checked };
												return size;
											});
											setstate(newobject);
										}}
										className="spancheckbox"
									>
										{el.title}
									</span>
								))}
							</div>
							<div>
								<div className="buttonFilter ">Add to cart</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
