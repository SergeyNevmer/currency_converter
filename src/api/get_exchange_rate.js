const axios = require("axios");

const baseUrl = "https://v6.exchangerate-api.com/v6/";
const key = "8668897f6986b014eb212649";

export const getExchangeRate = async (baseCurrency) => {
  try {
    const response = await axios.get(`${baseUrl}${key}/latest/${baseCurrency}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.log(error);
  }
};
