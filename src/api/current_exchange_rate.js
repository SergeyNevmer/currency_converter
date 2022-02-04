import { Types } from "./types";
const axios = require("axios");

export const asyncCurrentExchangeRateAction = async (arrayOfCurrencies) => {
  const { baseUrl, key } = Types;
  try {
    const firstCurrency = await axios.get(
      `${baseUrl}${key}/latest/${arrayOfCurrencies[0]}`
    );
    const secondCurrency = await axios.get(
      `${baseUrl}${key}/latest/${arrayOfCurrencies[1]}`
    );
    const thirdCurrency = await axios.get(
      `${baseUrl}${key}/latest/${arrayOfCurrencies[2]}`
    );
    return [firstCurrency.data, secondCurrency.data, thirdCurrency.data];
  } catch (error) {
    console.log(error);
  }
};
