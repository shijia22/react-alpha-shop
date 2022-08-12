// flow
export type Action =
  | { type: 'UPDATE_QUANTITY', payload: { id: Number, quantity: number } }
  | { type: 'REMOVE_QUANTITY', payload: { id: Number, quantity: number } }
  | { type: 'CHANGE_DELIVERY', payload: object };

export const actionUpdateQuantity = (id: string, quantity: number;) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity }
  };
};

export const actionRemoveItem = (id: Number | String, quantity: Number;) => {
  return {
    type: 'REMOVE_QUANTITY',
    payload: { id, quantity },
  };
};

export const actionChangDelivery = (selectDelivery: Object;) => {
  return {
    type: 'CHANGE_DELIVERY',
    payload: selectDelivery,
  };
};
