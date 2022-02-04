import { combineReducers } from "redux";
import { currentExchangeRateReducer } from "./currentExchangeRateReducer";

export const rootReducer = combineReducers({
  currentExchangeRate: currentExchangeRateReducer,
});
