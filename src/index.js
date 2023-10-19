// should be minimal. Creates instances of your project.

import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
})


import { calculateROI } from "./scripts/stocks"



document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    document.getElementById("roiForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        // Get input values from the form
        const initialDeposit = parseFloat(document.getElementById("initialDeposit").value);
        const yearlyDeposit = parseFloat(document.getElementById("yearlyDeposit").value);
        const desiredReturns = parseFloat(document.getElementById("desiredReturns").value);
        const yearsInvested = parseFloat(document.getElementById("yearsInvested").value);
    
        // Calculate ROI
        const { roi, yearsInvested: calculatedYears } = calculateROI(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested);
    
        // Display the result
        const resultElement = document.getElementById("resultForStocks");
        resultElement.innerHTML = `<p>Your Return On Investment (ROI) is ${roi} over ${calculatedYears} years.</p>`;
    });
});



