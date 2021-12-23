import axios, { AxiosResponse } from 'axios';
import { ProductActionType } from './actionTypes';

export const fetchMoreFeed = (page: number) => {
	return (dispatch: (arg0: { type: string; payload: AxiosResponse<any, any> }) => void) => {
		axios
			.get('https://backendapi.turing.com/products', {
				params: { page, limit: 9 },
			})
			.then((res) => {
				dispatch({
					type: ProductActionType.FETCH_PRODUCT_DATA_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: ProductActionType.FETCH_PRODUCT_DATA_FAIL,
					payload: err,
				});
			});
	};
};

export const searchProduct = (query_string: string) => {
	return (dispatch: (arg0: { type: string; payload: AxiosResponse<any, any> }) => void) => {
		axios
			.get('https://backendapi.turing.com/products/search', {
				params: { query_string, limit: 9 },
			})
			.then((res) => {
				dispatch({
					type: ProductActionType.SEARCH_PRODUCT_DATA,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getProductById = (product_id: number) => {
	return (dispatch: (arg0: { type: string; payload: AxiosResponse<any, any> }) => void) => {
		axios
			.get('https://backendapi.turing.com/products/' + product_id)
			.then((res) => {
				dispatch({
					type: ProductActionType.GET_PRODUCT_BY_ID,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
