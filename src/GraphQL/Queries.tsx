import { gql } from '@apollo/client';

export const LOAD_CATEGORIES = gql`
    query {
        categories {
        name,
        products {
            id,
            name,
            inStock,
            gallery,
            description,
            category,
            brand
        }
        }
    }
`;