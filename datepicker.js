export default function createInputDate() {
  let resultDiv = document.getElementById("input-date-container");

  let labelElem = document.createElement("label");
  labelElem.htmlFor = "input-date";
  labelElem.textContent = "Choose the date:";

  let inputElem = document.createElement("input");
  inputElem.type = "date";
  inputElem.id = "input-date";
  inputElem.className = "input-date";
  inputElem.valueAsNumber = Date.now();

  resultDiv.appendChild(labelElem);
  resultDiv.appendChild(inputElem);

  return resultDiv;
}

export function getDataDifference(data) {
  let today = new Date();
  let somePreviousDay = new Date(data);
  let result =
    (somePreviousDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) + 1;
  result = Math.abs(Math.round(result));

  return result <= 14 ? result : 14;
}
