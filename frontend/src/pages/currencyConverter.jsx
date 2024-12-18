import React, { useEffect, useState } from "react";
import {
  FaRupeeSign,
  FaDollarSign,
  FaYenSign,
  FaEuroSign,
  FaPoundSign,
} from "react-icons/fa";
import Background from "../components/Background";
import "./currencyConverter.css";

const CurrencyConverter = () => {
  //to store the values enter by the use
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [baseUnit, setBaseUnit] = useState("");
  const [conversionUnit, setConversionUnit] = useState("");
  const [symbols, setSymbols] = useState(null);

  //get Currency Symbols
  const fetchSymbols = async () => {
    const API_KEY = import.meta.env.VITE_CURRENCY_CONVERTER_API_KEY;
    try {
      const res = await fetch(
        `https://api.exchangeratesapi.io/v1/symbols?access_key=${API_KEY}`
      );
      const data = await res.json();
      if (data.success) {
        console.log(data);
        setSymbols(data.symbols);
      } else {
        alert("Could't fetch the data.");
      }
    } catch (error) {
      alert(error.message);
      setSymbols(null);
    }
  };

  //to call the above function only once
  useEffect(() => {
    fetchSymbols();
  }, []);

  //function to convert the currency
  const fetchConversionValue = async () => {
    const API_KEY = import.meta.env.VITE_CURRENCY_CONVERTER_API_KEY;
    try {
      const res = await fetch(
        `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${conversionUnit},${baseUnit}` //this gets EUR to conversion rates.
      );

      //baseunit to EUR = baseunit // EUR_conversion_rate
      //  and now conversonAmount = (baseunit // EUR_conversion_rate)*conversion_rate_EUR_to_conversionUnit
      const data = await res.json();
      console.log(data);
      if (data.success) {
        let result, rates;
        rates = data.rates;
        let ratesArr = Object.entries(rates);
        // console.log(ratesArr[0][1]);
        result = (amount / ratesArr[1][1]) * ratesArr[0][1];
        // console.log(result);
        setConvertedAmount(result);
      } else {
        alert("Something went wrong...");
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  // fetchCurrencySymbol
  const fetchCurrencySymbol = (unit) => {
    if (unit === "INR") {
      return <FaRupeeSign />;
    } else if (unit === "YEN") {
      return <FaYenSign />;
    } else if (unit === "USD") {
      return <FaDollarSign />;
    }
    else{
        return unit;
    }
  };

  return (
    <>
      <div className="currencyConverterApp">
        <Background />
        <div className="centerbody">
          <div className="screen">
            <div className="output">
              {convertedAmount ? (
                <>
                  {amount} {fetchCurrencySymbol(baseUnit)} ={" "}
                  {convertedAmount.toFixed(2)}{" "}
                  {fetchCurrencySymbol(conversionUnit)}
                </>
              ) : (
                "Select Below"
              )}
            </div>
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(value)) setAmount(value);
              }}
            />

            <select
              placeholder="From"
              value={baseUnit}
              onChange={(e) => {
                setBaseUnit(e.target.value);
              }}
            >
              <option value="" disabled>
                Set Base Currency
              </option>
              {symbols &&
                Object.entries(symbols).map(([code, name]) => {
                  return (
                    <option key={code} value={code}>
                      {code} - {name}
                    </option>
                  );
                })}
            </select>

            <select
              placeholder="From"
              value={conversionUnit}
              onChange={(e) => {
                setConversionUnit(e.target.value);
              }}
            >
              <option value="" disabled>
                convert to
              </option>
              {symbols &&
                Object.entries(symbols).map(([code, name]) => {
                  return (
                    <option key={code} value={code}>
                      {code} - {name}
                    </option>
                  );
                })}
            </select>

            <button type="submit" onClick={fetchConversionValue}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;
