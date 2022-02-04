import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Conversion } from "../pages/conversion/Conversion";
import { CurrentExchangeRate } from "../pages/current_exchange_rate/CurrentExchangeRate";
import { NotFoundPage } from "../pages/not_found_page/NotFoundPage";
import { Header } from "../components/Header/Header";

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Conversion />} />
        <Route
          path="/current_exchange_rate"
          element={<CurrentExchangeRate />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
