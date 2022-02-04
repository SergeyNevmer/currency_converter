import { Types } from "../types";

const initialState = {
  response: null,
};

export const currentExchangeRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CURRENT_EXCHANGE_RATE:
      return { ...state, response: action.payload };
    default:
      return state;
  }
};
