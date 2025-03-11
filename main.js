import createInputResult from "./inputResult.js";
import returnExchangeSum, { exchangeHistory } from "./exchangeSum.js";
import createInputDate, { getDataDifference } from "./datepicker.js";

const currencyArray = ["BYN", "USD", "EUR", "CNY", "RUB"];

createInputDate();

let currentExchangeRate = exchangeHistory[0];

const resultContainer = document.getElementById("currencies-result");
let selectedCurrency = document.getElementById("select-currency");
let datepicker = document.getElementById("input-date");

for (let currency of currencyArray.filter(
  (item) => item != selectedCurrency.value
)) {
  resultContainer.appendChild(createInputResult(currency));
}

const inputCurrencyFromAmount = document.getElementById("input-currency-from");
inputCurrencyFromAmount.addEventListener("input", addResultToInputBox);

datepicker.addEventListener("change", (e) => {
  let date = e.target.value;
  if (new Date(date).getTime() > new Date().getTime()) {
    alert("We can`t watch in the future");
    datepicker.valueAsNumber = Date.now();
  } else {
    let dayIndex = getDataDifference(date);
    currentExchangeRate = exchangeHistory[dayIndex];
  }
});

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
    BYNresult.value = returnExchangeSum(
      amount,
      selectedCurrency.value,
      "BYN",
      currentExchangeRate
    );
  }
  if (USDresult) {
    USDresult.value = returnExchangeSum(
      amount,
      selectedCurrency.value,
      "USD",
      currentExchangeRate
    );
  }
  if (EURresult) {
    EURresult.value = returnExchangeSum(
      amount,
      selectedCurrency.value,
      "EUR",
      currentExchangeRate
    );
  }
  if (CNYresult) {
    CNYresult.value = returnExchangeSum(
      amount,
      selectedCurrency.value,
      "CNY",
      currentExchangeRate
    );
  }
  if (RUBresult) {
    RUBresult.value = returnExchangeSum(
      amount,
      selectedCurrency.value,
      "RUB",
      currentExchangeRate
    );
  }
}
