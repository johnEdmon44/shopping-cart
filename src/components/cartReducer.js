export const initialCartState = [];


export function cartReducer(state, action) {
  if (action.type === 'ADD_TO_CART') {
    return [...state, action.payload];
  }

  if (action.type === 'REMOVE_FROM_CART') {
    return state.filter(item => item.id !== action.payload.id);
  }

  if (action.type === 'CLEAR_CART') {
    return [];
  }

  return state;
}