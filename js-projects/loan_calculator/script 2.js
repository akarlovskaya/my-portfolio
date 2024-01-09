/*jshint esversion: 6 */

// Listen for submit
const formCalculator = document.getElementById('loan-form');
const resultsDiv = document.getElementById('results');
const loaderGif = document.getElementById('loading');

// hide loader gif and result div
loaderGif.style.display = 'none';
resultsDiv.style.display = 'none';

formCalculator.addEventListener('submit', calculateResults);

function calculateResults(e) {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // set input values
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x - 1);

    // check if number is finite
    if ( isFinite(monthly) ) {
        monthlyPayment.value = monthly.toFixed(2); //convert a number into a string, keeping only two decimals
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        showLoader();
        showResultsDiv();
    } else {
        showError('Please check your numbers');
    }

    e.preventDefault();
}

// Show loader
function showLoader() {
    loaderGif.style.display = 'block';
    setTimeout(function(){
        loaderGif.remove();
    }, 2000);
}

// Show showResultsDiv
function showResultsDiv() {
    setTimeout(function(){
        resultsDiv.style.display = 'block';
    }, 2015);

}

// Show error
function showError(message) {
    // console.log('fee');
    const errorDiv = document.createElement('div');
    // get elements for insertion in DOM
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add error style
    errorDiv.className = 'alert alert-danger';

    // create text Node and append it to errorDiv
    errorDiv.appendChild(document.createTextNode(message));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 sec
    // setTimeout(function(){
    //     errorDiv.remove();
    // }, 3000);
    setTimeout(clearError, 3000);

}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}
