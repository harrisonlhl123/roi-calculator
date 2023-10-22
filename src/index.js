// should be minimal. Creates instances of your project.

// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// })

import { calculateROI } from "./scripts/stocks"
import { calculateROICashAndBonds } from "./scripts/cashAndBonds"
import { calculateROIOtherAssets } from "./scripts/otherAssets";
import { createBarGraph } from './scripts/barGraph';
import { createCashAndBondsGraph } from "./scripts/cashAndBondsGraph";
import { createBarGraphOtherAssets } from "./scripts/barGraphOtherAssets";
import { createPieChart } from "./scripts/pieChart";

document.addEventListener("DOMContentLoaded", function () {

    let totalDeposits = 0;
    let totalInterestEarned = 0;
    let finalBalance = 0;

    // Create a single event listener for the common button
    document.getElementById('calculateReturnsButton').addEventListener('click', function (e) {
        e.preventDefault();

        // Get input values from the form for stocks
        const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
        const yearlyDeposit = parseFloat(document.getElementById('yearlyDeposit').value);
        const desiredReturns = parseFloat(document.getElementById('desiredReturns').value);
        const yearsInvested = parseFloat(document.getElementById('yearsInvested').value);

        // Calculate ROI for stocks
        const roiData = calculateROI(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested);

        // Display the result for stocks
        const resultElement = document.getElementById('resultForStocks');
        resultElement.innerHTML = `<p>Your Return On Investment (ROI) for stocks is ${roiData.roi} over ${yearsInvested} years.</p>`;

        // Create a bar graph for stocks
        const canvas = document.getElementById('barChartCanvas');
        createBarGraph(canvas, roiData);

        totalDeposits += initialDeposit + (yearlyDeposit * yearsInvested);
        totalInterestEarned += roiData.roi - (initialDeposit + yearlyDeposit * yearsInvested);


        // Get input values from the form for cash and bonds
        const initialDeposit2 = parseFloat(document.getElementById("initialDeposit2").value);
        const yearlyDeposit2 = parseFloat(document.getElementById("yearlyDeposit2").value);
        const desiredReturns2 = parseFloat(document.getElementById("desiredReturns2").value);
        const yearsInvested2 = parseFloat(document.getElementById("yearsInvested2").value);

        // Calculate ROI for cash and bonds
        const roiData2 = calculateROICashAndBonds(initialDeposit2, yearlyDeposit2, desiredReturns2, yearsInvested2);

        // Display the result for cash and bonds
        const resultElement2 = document.getElementById("resultForCashAndBonds");
        resultElement2.innerHTML = `<p>Your Return On Investment (ROI) for cash and bonds is ${roiData2.roi2} over ${yearsInvested2} years.</p>`;

        // Create a graph for cash and bonds using the new canvas ID
        const canvas2 = document.getElementById('barChartCanvas2');
        createCashAndBondsGraph(canvas2, roiData2);

        totalDeposits += initialDeposit2 + (yearlyDeposit2 * yearsInvested2);
        totalInterestEarned += roiData2.roi2 - (initialDeposit2 + yearlyDeposit2 * yearsInvested2);


        // Get input values from the form for other assets
        const initialDeposit3 = parseFloat(document.getElementById("initialDeposit3").value);
        const yearlyDeposit3 = parseFloat(document.getElementById("yearlyDeposit3").value);
        const desiredReturns3 = parseFloat(document.getElementById("desiredReturns3").value);
        const yearsInvested3 = parseFloat(document.getElementById("yearsInvested3").value);

        // Calculate ROI for other assets
        const roiData3 = calculateROIOtherAssets(initialDeposit3, yearlyDeposit3, desiredReturns3, yearsInvested3);

        // Display the result for other assets
        const resultElement3 = document.getElementById("resultForAltAssets");
        resultElement3.innerHTML = `<p>Your Return On Investment (ROI) for other assets is ${roiData3.roi} over ${roiData3.yearsInvested} years.</p>`;

        // Create a graph for other assets using the new canvas ID
        const canvas3 = document.getElementById('barChartCanvas3');
        createBarGraphOtherAssets(canvas3, roiData3);

        totalDeposits += initialDeposit3 + (yearlyDeposit3 * yearsInvested3);
        totalInterestEarned += roiData3.roi - (initialDeposit3 + yearlyDeposit3 * yearsInvested3);
        finalBalance = totalDeposits + totalInterestEarned;


        document.getElementById('totalDeposits').textContent = `Total Deposits: $${totalDeposits.toFixed(2)}`;
        document.getElementById('totalInterest').textContent = `Total Interest Earned: $${totalInterestEarned.toFixed(2)}`;
        document.getElementById('finalBalance').textContent = `Final Balance: $${finalBalance}`;

        const canvas4 = 'pieChartCanvas'; // Change to your actual canvas ID
        createPieChart(totalDeposits, totalInterestEarned, canvas4);

    });
});






