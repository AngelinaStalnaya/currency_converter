const convertToBYN = (currency, amount, currencyRates ) => {
    switch (currency) {
    case "USD":
      return currencyRates.USDTOBYN * amount;
    case "EUR":
      return currencyRates.EURTOBYN * amount;
    case "CNY":
      return currencyRates.CNYTOBYN * amount;
    case "RUB":
      return currencyRates.RUBTOBYN * amount;
    case "BYN":
      return amount;
  }
};

export default function returnExchangeSum(amount, currencyFrom, currencyTo, currencyRates) {
  switch (currencyTo) {
    case "BYN":
      return convertToBYN(currencyFrom, amount, currencyRates).toFixed(4);
    case "USD":
      return (convertToBYN(currencyFrom, amount, currencyRates) / currencyRates.USDTOBYN).toFixed(4);
    case "EUR":
      return (convertToBYN(currencyFrom, amount, currencyRates) / currencyRates.EURTOBYN).toFixed(4);
    case "CNY":
      return (convertToBYN(currencyFrom, amount, currencyRates) / currencyRates.CNYTOBYN).toFixed(4);
    case "RUB":
      return (convertToBYN(currencyFrom, amount, currencyRates) / currencyRates.RUBTOBYN).toFixed(4);
  }
}

export let exchangeHistory = [
  {
    USDTOBYN: 3.2037,
    EURTOBYN: 3.4762,
    CNYTOBYN: 0.43598,
    RUBTOBYN: 0.035781,
  },
];

function randomCoefficients(exchangeRate) {
  return Math.random() * 0.1 * exchangeRate + exchangeRate;
}

function createExchangeRateHistory() {
  let exchangeRate = exchangeHistory[0];

  for (let day = 1; day <= 14; day++) {
    exchangeHistory.push({
      USDTOBYN: randomCoefficients(exchangeRate.USDTOBYN),
      EURTOBYN: randomCoefficients(exchangeRate.EURTOBYN),
      CNYTOBYN: randomCoefficients(exchangeRate.CNYTOBYN),
      RUBTOBYN: randomCoefficients(exchangeRate.RUBTOBYN),
    });
  }
}

createExchangeRateHistory();
