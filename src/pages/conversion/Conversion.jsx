import React, { useState } from "react";
import styles from "./Conversion.module.css";
import { getExchangeRate } from "../../api/get_exchange_rate";

export const Conversion = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const arrayValues = text.split(" ");
    getExchangeRate(arrayValues[1]).then((response) => {
      setResult(response[arrayValues[3]] * arrayValues[0]);
    });
  };

  return (
    <main className={styles.container}>
      <article className={styles.secondContainer}>
        <section className={styles.containerForInfo}>
          <h2>Please fill in the field as in the example!</h2>
          <p>Note: 15 USD in UAH</p>
        </section>
        <section className={styles.containerForInteractivityAndResult}>
          <div className={styles.interactivity}>
            <form onSubmit={handleClick}>
              <input
                type="text"
                value={text}
                onChange={handleChange}
                title="Please fill in the field as in the example!"
                required
                pattern="^[0-9]{1,10} [A-Z]{3} [a-z]{2} [A-Z]{3}$"
              />
              <button type="submit">Conversion</button>
            </form>
          </div>
          {result && (
            <p className={styles.result}>Result: {result.toFixed(2)}</p>
          )}
        </section>
      </article>
    </main>
  );
};
