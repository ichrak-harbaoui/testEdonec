import { ProductActionType, ProductAction } from '../action/actionTypes';
import { IProduct, IProductDetails } from '../../types/types';

export interface IProductState {
	products: IProduct[];
	count?: number;
	selectedProduct?: IProductDetails;
	isLoading: boolean;
	errors?: string;
}

const initialState: IProductState = {
	products: [],
	isLoading: false,
};

export const productReducer = (
	state: IProductState = initialState,
	action: ProductAction
): IProductState => {
	switch (action.type) {
		case ProductActionType.FETCH_PRODUCT_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: action.payload.rows,
				count: action.payload.count,
			};
		case ProductActionType.SEARCH_PRODUCT_PENDING:
		case ProductActionType.FETCH_PRODUCT_DATA_PENDING:
			return {
				...state,
				isLoading: true,
			};
		case ProductActionType.FETCH_PRODUCT_DATA_FAIL:
			return {
				...state,
				isLoading: true,
			};
		case ProductActionType.SEARCH_PRODUCT_DATA:
			return {
				...state,
				products: action.payload.rows,
				count: action.payload.count,
			};
		case ProductActionType.GET_PRODUCT_BY_ID:
			return {
				...state,
				selectedProduct: action.payload,
			};
		default:
			return state;
	}
};
