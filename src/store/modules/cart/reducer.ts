import produce, {Draft} from 'immer';
import { IProductData, ApplicationAction } from '../../../types/types';

export default function cart(state = [], action: ApplicationAction) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft: Draft<IProductData[]>) => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft: Draft<IProductData[]>) => {
        const productIndex: number = draft.findIndex((p: IProductData) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      return produce(state, (draft: Draft<IProductData[]>) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
