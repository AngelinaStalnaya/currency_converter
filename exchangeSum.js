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
      return convertToBYN(currencyFrom, amount);
    case "USD":
      return convertToBYN(currencyFrom, amount) / USDTOBYN;
    case "EUR":
      return convertToBYN(currencyFrom, amount) / EURTOBYN;
    case "CNY":
      return convertToBYN(currencyFrom, amount) / CNYTOBYN;
    case "RUB":
      return convertToBYN(currencyFrom, amount) / RUBTOBYN;
  }
}
