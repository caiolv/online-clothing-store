import { Action } from 'redux'; 

export interface IPricesData {
    currency: string;
    amount: number;
}

export interface IProductData {
    id: string;
    name: string;
    inStock: boolean;
    gallery: string[];
    description: string;
    category: string;
    prices: IPricesData[];
    price: IPricesData | null;
    amount: number | null;
}

export interface AddToCart extends Action {
    type: "@cart/ADD",
    product: IProductData
}

export interface RemoveFromCart extends Action {
    type: "@cart/REMOVE",
    id: string
}

export interface UpdateAmount extends Action {
    type: "@cart/UPDATE_AMOUNT",
    id: string,
    amount: number
}

export interface ApplicationState {  
    cart: IProductData[];
} 

export type ApplicationAction = AddToCart | RemoveFromCart | UpdateAmount;