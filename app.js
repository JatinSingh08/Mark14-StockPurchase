const submitButton = document.querySelector('#submit-btn')
const intitialPrice = document.querySelector('#initial-price')
const stocksQuantity = document.querySelector('#stocks-quantity')
const currentPrice = document.querySelector('#current-price')
const outputDiv = document.querySelector('#output-div')

 
function calculateProfitAndLoss(initial, quantity, current) {

  if(current > initial) {
    // profit logic
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit/initial) * 100
    
    showOutput(`hey profit is: ${profit} and percent is: ${profitPercentage}%`)
  }
  else if(current < initial){
    // Loss logic
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss/initial) * 100;
    
    showOutput(`hey loss is: ${loss} and percent is: ${lossPercentage}%`)
  }
  else {
    //the rest of the logic or Same 
    showOutput(`No pain no gain and no gain no pain`)
  }

}

function submitHandler() {

  calculateProfitAndLoss(intitialPrice.value,stocksQuantity.value,currentPrice.value)

}
submitButton.addEventListener('click',submitHandler)

function showOutput(message) {
  outputDiv.innerHTML = message
}