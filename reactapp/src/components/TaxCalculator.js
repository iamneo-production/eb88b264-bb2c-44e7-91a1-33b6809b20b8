import React, { useState } from "react";
import { Helmet } from "react-helmet";
const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState("");

  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    const taxRateValue = parseFloat(taxRate);
    const calculatedTax = (incomeValue * (taxRateValue/100)).toFixed(2);
    setTaxAmount(calculatedTax + incomeValue);
  };
   const css = require("../css/tax.css").toString();
  return (
    <>
      <Helmet>{css}</Helmet>
      <div className="tax-calculator">
        <h2>Tax Calculator</h2>

        <div className="calculator">
          <div className="calculator-inputs">
            <label htmlFor="income">Income:</label>
            <input
              type="number"
              id="income"
              placeholder="Enter income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />

            <label htmlFor="tax-rate">Tax Rate:</label>
            <input
              type="number"
              id="tax-rate"
              placeholder="Enter tax rate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            />
          </div>

          <button className="calculate-btn" onClick={calculateTax}>
            Calculate Tax
          </button>

          <div className="calculator-output">
            <label htmlFor="tax-amount">Tax Amount:</label>
            <span id="tax-amount">{`$${taxAmount}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxCalculator;
