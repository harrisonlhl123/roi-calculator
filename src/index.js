// should be minimal. Creates instances of your project.

import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
})


import { calculateROI } from "./scripts/stocks"
import { calculateROICashAndBonds } from "./scripts/cashAndBonds"
import { calculateROIOtherAssets } from "./scripts/otherAssets";



document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    document.getElementById("stocksForm").addEventListener("submit", function (e) {
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


document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    document.getElementById("cashAndBondsForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        // Get input values from the form
        const initialDeposit2 = parseFloat(document.getElementById("initialDeposit2").value);
        const yearlyDeposit2 = parseFloat(document.getElementById("yearlyDeposit2").value);
        const desiredReturns2 = parseFloat(document.getElementById("desiredReturns2").value);
        const yearsInvested2 = parseFloat(document.getElementById("yearsInvested2").value);
    
        // Calculate ROI
        const { roi2, yearsInvested2: calculatedYears2 } = calculateROICashAndBonds(initialDeposit2, yearlyDeposit2, desiredReturns2, yearsInvested2);
    
        // Display the result
        const resultElement2 = document.getElementById("resultForCashAndBonds");
        resultElement2.innerHTML = `<p>Your Return On Investment (ROI) is ${roi2} over ${calculatedYears2} years.</p>`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("altAssetsForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values from the form
        const initialDeposit3 = parseFloat(document.getElementById("initialDeposit3").value);
        const yearlyDeposit3 = parseFloat(document.getElementById("yearlyDeposit3").value);
        const desiredReturns3 = parseFloat(document.getElementById("desiredReturns3").value);
        const yearsInvested3 = parseFloat(document.getElementById("yearsInvested3").value);
    
        // Calculate ROI
        const { roi3, yearsInvested3: calculatedYears3 } = calculateROIOtherAssets(initialDeposit3, yearlyDeposit3, desiredReturns3, yearsInvested3);
    
        // Display the result
        const resultElement3 = document.getElementById("resultForAltAssets");
        resultElement3.innerHTML = `<p>Your Return On Investment (ROI) is ${roi3} over ${calculatedYears3} years.</p>`;
    })
})



import { Chart } from 'chart.js/auto';
import { createBarGraph } from "./scripts/barGraph";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("stocksForm");
    const canvas = document.getElementById("roiChart");

    form.addEventListener("submit", function (e) {
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

        const canvas = document.getElementById("roiGraph");
        createBarGraph(canvas, roi);
    });
});




