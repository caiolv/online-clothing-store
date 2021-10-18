import { gql } from '@apollo/client';

// export const LOAD_CATEGORIES = gql`
//     query {
//         categories {
//         name,
//         products {
//             id,
//             name,
//             inStock,
//             gallery,
//             description,
//             category,
//             brand
//         }
//         }
//     }
// `;

export const LOAD_CATEGORIES = gql`
query {
    category (input: { title: "tech" }) {
          products {
              id,
              name,
              inStock,
              gallery,
              description,
              category,
          }
    }
}
`;