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
    price: IPricesData;
}