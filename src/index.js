import { calculateROI } from "./scripts/stocks";
import { calculateROICashAndBonds } from "./scripts/cashAndBonds";
import { calculateROIOtherAssets } from "./scripts/otherAssets";
import { createBarGraph } from './scripts/barGraph';
import { createCashAndBondsGraph } from "./scripts/cashAndBondsGraph";
import { createBarGraphOtherAssets } from "./scripts/barGraphOtherAssets";
import { createPieChart } from "./scripts/pieChart";
import { createPortfolioPieChart } from "./scripts/portfolioPieChart";
import { calculatePortfolioData } from "./scripts/calculatePortfolioData";
import { populateDefaultValues } from "./scripts/defaultValues";
import { calculateAndDisplayResults } from "./scripts/calculateAndDisplay";

document.addEventListener("DOMContentLoaded", function () {
    populateDefaultValues();
    calculateAndDisplayResults();

    // Define these variables outside of the event listener function so they can be accessed later
    let totalDeposits = 0;
    let totalInterestEarned = 0;
    let finalBalance = 0;

    // Define chart variables to store chart instances
    let stocksChart, cashAndBondsChart, otherAssetsChart, pieChart;

    // ...
    // Inside the event listener function
    document.getElementById('calculateReturnsButton').addEventListener('click', function (e) {
        e.preventDefault();

        // Reset the data variables when the button is clicked
        totalDeposits = 0;
        totalInterestEarned = 0;

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

        // Destroy the previous stocks chart before creating a new one
        if (stocksChart) {
            stocksChart.destroy();
        }

        // Create a bar graph for stocks using the correct canvas ID
        stocksChart = createBarGraph('barChartCanvas', roiData);

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

        // Destroy the previous cash and bonds chart before creating a new one
        if (cashAndBondsChart) {
            cashAndBondsChart.destroy();
        }

        // Create a graph for cash and bonds using the correct canvas ID
        cashAndBondsChart = createCashAndBondsGraph('barChartCanvas2', roiData2);

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

        // Destroy the previous other assets chart before creating a new one
        if (otherAssetsChart) {
            otherAssetsChart.destroy();
        }

        // Create a graph for other assets using the correct canvas ID
        otherAssetsChart = createBarGraphOtherAssets('barChartCanvas3', roiData3);

        totalDeposits += initialDeposit3 + (yearlyDeposit3 * yearsInvested3);
        totalInterestEarned += roiData3.roi - (initialDeposit3 + yearlyDeposit3 * yearsInvested3);
        finalBalance = totalDeposits + totalInterestEarned;

        document.getElementById('totalDeposits').textContent = `Total Deposits: $${totalDeposits.toFixed(2)}`;
        document.getElementById('totalInterest').textContent = `Total Interest Earned: $${totalInterestEarned.toFixed(2)}`;
        document.getElementById('finalBalance').textContent = `Final Balance: $${finalBalance.toFixed(2)}`;

        // Destroy the previous pie chart before creating a new one
        if (pieChart) {
            pieChart.destroy();
        }

        // Use the correct canvas ID
        const pieChartCanvasId = 'pieChartCanvas'; // ID of the canvas element
        pieChart = createPieChart(totalDeposits, totalInterestEarned, pieChartCanvasId);

        // Use the correct canvas ID
        const portfolioPieChartCanvas = document.getElementById('portfolioPieChart');
        const portfolioData = calculatePortfolioData(roiData.roi, roiData2.roi2, roiData3.roi);
        createPortfolioPieChart(portfolioData, portfolioPieChartCanvas);
    });

});



