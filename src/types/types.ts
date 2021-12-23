export interface IProduct {
	product_id: number;
	name: string;
	description: string;
	price: string;
	discounted_price: string;
	thumbnail: string;
}
export interface IProductDetails {
	product_id: number;
	name: string;
	description: string;
	price: string;
	discounted_price: string;
	image: string;
	image_2: string;
	thumbnail: string;
	display: number;
}
export type IFetchProduct = {
	count: number;
	rows: IProduct[];
};
