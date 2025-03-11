let USDTOBYN = 3.2037;
let EURTOBYN = 3.4762;
let CNYTOBYN = 0.43598;
let RUBTOBYN = 0.035781;

const convertToBYN = (currency, amount) => {
  switch (currency) {
    case "USD":
      return USDTOBYN * amount;
    case "EUR":
      return EURTOBYN * amount;
    case "CNY":
      return CNYTOBYN * amount;
    case "RUB":
      return RUBTOBYN * amount;
    case "BYN":
      return amount;
  }
};

export default function returnExchangeSum(amount, currencyFrom, currencyTo) {
  switch (currencyTo) {
    case "BYN":
      return (convertToBYN(currencyFrom, amount)).toFixed(4);
    case "USD":
      return (convertToBYN(currencyFrom, amount) / USDTOBYN).toFixed(4);
    case "EUR":
      return (convertToBYN(currencyFrom, amount) / EURTOBYN).toFixed(4);
    case "CNY":
      return (convertToBYN(currencyFrom, amount) / CNYTOBYN).toFixed(4);
    case "RUB":
      return (convertToBYN(currencyFrom, amount) / RUBTOBYN).toFixed(4);
  }
}
