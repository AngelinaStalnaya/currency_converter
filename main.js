import createInputResult from "./inputResult.js";
import returnExchangeSum from "./exchangeSum.js";

const currencyArray = ["BYN", "USD", "EUR", "CNY", "RUB"];

const resultContainer = document.getElementById("currencies-result");
let selectedCurrency = document.getElementById("select-currency");

for (let currency of currencyArray.filter(
  (item) => item != selectedCurrency.value
)) {
  resultContainer.appendChild(createInputResult(currency));
}

const inputCurrencyFromAmount = document.getElementById("input-currency-from");
inputCurrencyFromAmount.addEventListener("input", addResultToInputBox);

selectedCurrency.addEventListener("change", () => {
  let resultCurrencies = currencyArray.filter(
    (item) => item != selectedCurrency.value
  );

  resultContainer.innerHTML = "";

  for (let currency of resultCurrencies) {
    resultContainer.appendChild(createInputResult(currency));
  }

  inputCurrencyFromAmount.value = "";
});

function addResultToInputBox(e) {
  const BYNresult = document.getElementById("BYN");
  const USDresult = document.getElementById("USD");
  const EURresult = document.getElementById("EUR");
  const CNYresult = document.getElementById("CNY");
  const RUBresult = document.getElementById("RUB");

  let amount = e.target.value;

  if (BYNresult) {
    BYNresult.value = returnExchangeSum(amount, selectedCurrency.value, "BYN");
  }
  if (USDresult) {
    USDresult.value = returnExchangeSum(amount, selectedCurrency.value, "USD");
  }
  if (EURresult) {
    EURresult.value = returnExchangeSum(amount, selectedCurrency.value, "EUR");
  }
  if (CNYresult) {
    CNYresult.value = returnExchangeSum(amount, selectedCurrency.value, "CNY");
  }
  if (RUBresult) {
    RUBresult.value = returnExchangeSum(amount, selectedCurrency.value, "RUB");
  }
}
