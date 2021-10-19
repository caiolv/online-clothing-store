import { gql } from '@apollo/client';

export const LOAD_CATEGORIES = gql`
    query {
        categories {
            name,
        }
    }
`;

export const LOAD_CATEGORY = gql`
query ($category: String!){
    category (input: { title: $category }) {
        products {
            id,
            name,
            inStock,
            gallery,
            description,
            category,
            prices {
                currency,
                amount
            }
        }
    }
}
`;

export const LOAD_CURRENCIES = gql`
query {
    currencies
}
`;