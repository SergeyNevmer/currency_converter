import { Types } from "../types";

export const currentExchangeRateAction = (arrayOfObjects) => ({
  type: Types.GET_CURRENT_EXCHANGE_RATE,
  payload: arrayOfObjects,
});
