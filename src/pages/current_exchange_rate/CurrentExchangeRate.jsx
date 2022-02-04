import React, { useCallback, useEffect, useState } from "react";
import styles from "./CurrentExchangeRate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentExchangeRateAction } from "../../api/current_exchange_rate";
import { currentExchangeRateAction } from "../../redux/actions/currentExchangeRateAction";
const { v4: uuidv4 } = require("uuid");

export const CurrentExchangeRate = () => {
  const [currency, setCurrency] = useState("UAH");
  const dispatch = useDispatch();
  const arrayOfCurrencies = useSelector(
    (state) => state?.currentExchangeRate.response
  );

  const addListOfCurrencies = useCallback(
    (arrayOfObjects) => dispatch(currentExchangeRateAction(arrayOfObjects)),
    [dispatch]
  );

  useEffect(() => {
    const baseCurrencies = ["UAH", "USD", "EUR", "RUB"];
    const sortedArray = baseCurrencies.filter((item) => item !== currency);
    asyncCurrentExchangeRateAction(sortedArray).then((response) => {
      addListOfCurrencies(response);
    });
  }, [currency, addListOfCurrencies]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <main className={styles.container}>
      <article className={styles.secondContainer}>
        <section className={styles.containerForInfo}>
          <h2>If you want to see another exchange rate, change currency.</h2>
          <select onChange={handleChange}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
          </select>
        </section>
        {arrayOfCurrencies?.length > 1 && (
          <section className={styles.containerForCurrencies}>
            {arrayOfCurrencies.map((item) => (
              <p
                key={uuidv4()}
              >{`1${item.base_code} = ${item.conversion_rates[currency]} ${currency}`}</p>
            ))}
          </section>
        )}
      </article>
    </main>
  );
};
