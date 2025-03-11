export default function createInputResult(id) {
    let resultDiv = document.createElement('div');
    resultDiv.className = 'result';

    let labelElem = document.createElement('label');
    labelElem.htmlFor = id;
    labelElem.textContent = id;

    let inputElem = document.createElement('input'); 
    inputElem.type = 'number';
    inputElem.id = id;
    inputElem.className = 'input currency-result';
    
    resultDiv.appendChild(labelElem);
    resultDiv.appendChild(inputElem);

    return resultDiv;
 };



