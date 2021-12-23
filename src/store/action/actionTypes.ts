import { IProduct, IProductDetails } from '../../types/types';

export enum ProductActionType {
	FETCH_PRODUCT_DATA_SUCCESS = 'FETCH_PRODUCT_DATA_SUCCESS',
	FETCH_PRODUCT_DATA_FAIL = 'FETCH_PRODUCT_DATA_FAIL',
	FETCH_PRODUCT_DATA_PENDING = 'FETCH_PRODUCT_DATA_PENDING',
	SEARCH_PRODUCT_DATA = 'SEARCH_PRODUCT_DATA',
	SEARCH_PRODUCT_PENDING = 'SEARCH_PRODUCT_PENDING',

	GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID',
}

interface actionPending {
	type: ProductActionType.FETCH_PRODUCT_DATA_PENDING | ProductActionType.SEARCH_PRODUCT_PENDING;
}
interface actionSuccess {
	type: ProductActionType.FETCH_PRODUCT_DATA_SUCCESS | ProductActionType.SEARCH_PRODUCT_DATA;
	payload: { rows: IProduct[]; count: number };
}

interface actionFail {
	type: ProductActionType.FETCH_PRODUCT_DATA_FAIL;
	payload: string;
}
interface actionByIdSuccess {
	type: ProductActionType.GET_PRODUCT_BY_ID;
	payload: IProductDetails;
}
export type ProductAction = actionPending | actionSuccess | actionFail | actionByIdSuccess;
