import React, { useEffect, useState } from "react";
import M from "materialize-css";

import ChampPrix from "../components/ChampPrix/ChampPrix.js";
import SelectMonnaie from "../components/SelectMonnaie/SelectMonnaie.js";
import Spinner from "../components/Spinner/index.js";

const Converter = () => {
  const [stateConversion, setStateConversion] = useState({
    isLoading: false,
    conversion: 1
  });
  const { conversion, isLoading } = stateConversion;

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const fetchConversion = async (currency, currencies) => {
    if (
      prix.value > 0 &&
      currency !== currencies &&
      prix.className !== "invalid"
    ) {
      setStateConversion({ isLoading: true });
      const resultat = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=ThnvP1RpHPrWhXIBY7MMLjhrpPRbJiF5d3XT7HA1&base_currency=${currency}&currencies=${currencies}`
      );
      const data = await resultat.json();
      setStateConversion({
        conversion: data.data[currencies],
        isLoading: false
      });
    } else {
      setStateConversion({ conversion: 1 });
    }
  };

  // currency Select
  const [currencySelectValue, setCurrencySelectValue] = useState("EUR");

  const handleChangeCurrencySelect = (e) => {
    setCurrencySelectValue(e?.target?.value);
    fetchConversion(e?.target?.value, currenciesSelectValue);
  };

  // currencies Select
  const [currenciesSelectValue, setCurrenciesSelectValue] = useState("EUR");

  const handleChangeCurrenciesSelect = (e) => {
    setCurrenciesSelectValue(e?.target?.value);
    fetchConversion(currencySelectValue, e?.target?.value);
  };

  // Prix émit
  const [prix, setPrix] = useState({
    value: 0,
    className: ""
  });

  const handleChangePrix = (e) => {
    const value = clearNumber(e?.target?.value);
    setPrix({
      className: validation(value),
      value: value
    });
  };

  const validation = (number) => {
    if (typeof number === "number") {
      return "valid";
    } else {
      return "invalid";
    }
  };

  const clearNumber = (number) => {
    if (/^\d+(\.\d{1,2})?/.test(number)) {
      return number * 1; //pour la conversion en type Number
    } else {
      return number; // le type reste string pour être dans la classe invalid
    }
  };

  const calculeConversion = (taux, prix) =>
    isNaN(taux * prix) ? 0 : taux * prix;

  return (
    <div className="container">
      <div className="row">
        <h3>Convertisseur</h3>
        <div className="col s8">
          <div className="row">
            <div className="col s6">
              <label>From</label>
              <SelectMonnaie
                value={currencySelectValue}
                onChange={handleChangeCurrencySelect}
              />
              {currencySelectValue}
            </div>
            <div className="col s6">
              <label>To</label>
              <SelectMonnaie
                value={currenciesSelectValue}
                onChange={handleChangeCurrenciesSelect}
              />
              {currenciesSelectValue}
            </div>
            <div className="row">
              <ChampPrix
                value={prix.value}
                onChange={handleChangePrix}
                className={prix.className}
              />
              <div className="input-field col s12">
                <h5>
                  Result :
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    calculeConversion(conversion, prix.value)
                  )}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
