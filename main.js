import createInputResult from "./inputResult.js";

const currencyArray = ["BYN", "USD", "EUR", "CNY", "RUB"];

const returnSum = (currencyAmmount, currencyEquivalent) => {
  return currencyAmmount * currencyEquivalent;
};


const resultContainer = document.getElementById("currencies-result");
let selectedCurrency = document.getElementById("select-currency");

for (let currency of currencyArray.filter(item => item != selectedCurrency.value)) {
  resultContainer.appendChild(createInputResult(currency));
}

selectedCurrency.addEventListener("change", (e) => {
  let selectedCurrencyValue = e.target.value;

  let resultCurrencies = currencyArray.filter((item) => item != selectedCurrencyValue);
    resultContainer.innerHTML = '';
    for (let currency of resultCurrencies) {
        resultContainer.appendChild(createInputResult(currency));
    }
});
