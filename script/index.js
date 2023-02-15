// Mobile plus btn 

function updateInputValue(isIncrease, inputfield) {
    const inputField = document.getElementById(inputfield)
    const inputString = inputField.value
    let inputValue = parseInt(inputString)

    if (isIncrease === true) {
        inputValue++;
    } else {
        inputValue--;
    }
    inputField.value = inputValue;
    return inputValue;
}

//--------------------------
function updateTotalPrice(mobileAmount, idOfUpdatinInnerText, value) {
    const totalMobilePrice = mobileAmount * value;
    document.getElementById(idOfUpdatinInnerText).innerText = totalMobilePrice;
}
//--------------------------
function getTheInnerTextById(id) {
    const getTheValueString = document.getElementById(id);
    const getTheValue = parseInt(getTheValueString.innerText)
    return getTheValue;
}

//-------------------------
function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}

//-------------------------------
function calculateSubTotalInnerText() {
    const mobilePrice = getTheInnerTextById('mobilePrice')
    const casingPrice = getTheInnerTextById('casePrice')

    // for subTotal
    const subTotalValue = mobilePrice + casingPrice;
    setInnerTextById('subTotal', subTotalValue)
    // for text amount
    const textAmountString = (subTotalValue * 0.1).toFixed(2)
    const textAmount = parseFloat(textAmountString)
    setInnerTextById('textAmount', textAmount)

    //for grand total
    const grandTotalString = (subTotalValue + textAmount).toFixed(2);
    const grandTotal = parseFloat(grandTotalString);
    setInnerTextById('grandTotal', grandTotal)

}
//---------------------------------------
// mobile phone price updating.....plus
document.getElementById('mobile-plus-btn').addEventListener('click', function () {
    const newMobileNumber = updateInputValue(true, 'mobileInputField');
    updateTotalPrice(newMobileNumber, 'mobilePrice', 1219)
    calculateSubTotalInnerText();

})

// mobile phone price updating.....minus
document.getElementById('mobile-minus-btn').addEventListener('mousedown', function () {
    const newMobileNumber = updateInputValue(false, 'mobileInputField');
    updateTotalPrice(newMobileNumber, 'mobilePrice', 1219)
    calculateSubTotalInnerText();
})



// casing price updating  plus button
document.getElementById('case-plus-btn').addEventListener('click', function () {
    const newCaseNumber = updateInputValue(true, 'caseInputField');
    updateTotalPrice(newCaseNumber, 'casePrice', 59)
    calculateSubTotalInnerText();
})
// casing price updating minus button
document.getElementById('case-minus-btn').addEventListener('mousedown', function () {
    const newCaseNumber = updateInputValue(false, 'caseInputField');
    updateTotalPrice(newCaseNumber, 'casePrice', 59)
    calculateSubTotalInnerText();
})


// cross button of mobile
document.getElementById('mobile-cross-btn').addEventListener('click', function(){
    const mobileInputField = document.getElementById('mobileInputField')
    mobileInputField.value = 0
    setInnerTextById('mobilePrice', 0) 
})

// cross button casing
document.getElementById('case-cross-btn').addEventListener('click', function(){
    const caseInputField = document.getElementById('caseInputField')
    caseInputField.value = 0
     setInnerTextById('casePrice', 0) 
})