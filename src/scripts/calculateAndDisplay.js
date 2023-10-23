import { calculateROI } from "./stocks";
import { calculateROICashAndBonds } from "./cashAndBonds";
import { calculateROIOtherAssets } from "./otherAssets";
import { createBarGraph } from './barGraph';
import { createCashAndBondsGraph } from "./cashAndBondsGraph";
import { createBarGraphOtherAssets } from "./barGraphOtherAssets";
import { createPieChart } from "./pieChart";
import { createPortfolioPieChart } from "./portfolioPieChart";
import { calculatePortfolioData } from "./calculatePortfolioData";

export function calculateAndDisplayResults() {
    // Step 1: Reset Total Values
    let totalDeposits = 0;
    let totalInterestEarned = 0;

    // Step 2: Calculate ROI and Update Total Values
    // Calculate and display results for stocks
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    const yearlyDeposit = parseFloat(document.getElementById('yearlyDeposit').value);
    const desiredReturns = parseFloat(document.getElementById('desiredReturns').value);
    const yearsInvested = parseFloat(document.getElementById('yearsInvested').value);
    const roiData = calculateROI(initialDeposit, yearlyDeposit, desiredReturns, yearsInvested);
    const resultElement = document.getElementById('resultForStocks');
    resultElement.innerHTML = `<p>Your Return On Investment (ROI) for stocks is ${roiData.roi} over ${yearsInvested} years.</p>`;
    const canvas = 'barChartCanvas'; // Replace with your actual canvas ID
    createBarGraph(canvas, roiData);

    // Calculate and display results for cash and bonds
    const initialDeposit2 = parseFloat(document.getElementById("initialDeposit2").value);
    const yearlyDeposit2 = parseFloat(document.getElementById("yearlyDeposit2").value);
    const desiredReturns2 = parseFloat(document.getElementById("desiredReturns2").value);
    const yearsInvested2 = parseFloat(document.getElementById("yearsInvested2").value);
    const roiData2 = calculateROICashAndBonds(initialDeposit2, yearlyDeposit2, desiredReturns2, yearsInvested2);
    const resultElement2 = document.getElementById("resultForCashAndBonds");
    resultElement2.innerHTML = `<p>Your Return On Investment (ROI) for cash and bonds is ${roiData2.roi2} over ${yearsInvested2} years.</p>`;
    const canvas2 = 'barChartCanvas2'; // Replace with your actual canvas ID
    createCashAndBondsGraph(canvas2, roiData2);

    // Calculate and display results for other assets
    const initialDeposit3 = parseFloat(document.getElementById("initialDeposit3").value);
    const yearlyDeposit3 = parseFloat(document.getElementById("yearlyDeposit3").value);
    const desiredReturns3 = parseFloat(document.getElementById("desiredReturns3").value);
    const yearsInvested3 = parseFloat(document.getElementById("yearsInvested3").value);
    const roiData3 = calculateROIOtherAssets(initialDeposit3, yearlyDeposit3, desiredReturns3, yearsInvested3);
    const resultElement3 = document.getElementById("resultForAltAssets");
    resultElement3.innerHTML = `<p>Your Return On Investment (ROI) for other assets is ${roiData3.roi} over ${roiData3.yearsInvested} years.</p>`;
    const canvas3 = 'barChartCanvas3'; // Replace with your actual canvas ID
    createBarGraphOtherAssets(canvas3, roiData3);

    // Update Total Deposits and Total Interest Earned
    totalDeposits += initialDeposit + initialDeposit2 + initialDeposit3 +
                    (yearlyDeposit * yearsInvested) + (yearlyDeposit2 * yearsInvested2) + (yearlyDeposit3 * yearsInvested3);
    totalInterestEarned += roiData.roi - (initialDeposit + yearlyDeposit * yearsInvested) +
                         roiData2.roi2 - (initialDeposit2 + yearlyDeposit2 * yearsInvested2) +
                         roiData3.roi - (initialDeposit3 + yearlyDeposit3 * yearsInvested3);

    // Step 3: Update Final Balance
    const finalBalance = totalDeposits + totalInterestEarned;

    // Display total deposits, total interest earned, and final balance
    document.getElementById('totalDeposits').textContent = `Total Deposits: $${totalDeposits.toFixed(2)}`;
    document.getElementById('totalInterest').textContent = `Total Interest Earned: $${totalInterestEarned.toFixed(2)}`;
    document.getElementById('finalBalance').textContent = `Final Balance: $${finalBalance.toFixed(2)}`;

    // Create pie chart and portfolio pie chart
    const canvas4 = 'pieChartCanvas'; // Replace with your actual canvas ID
    createPieChart(totalDeposits, totalInterestEarned, canvas4);
    const canvas5 = document.getElementById('portfolioPieChart'); // Replace with your actual canvas ID
    const portfolioData = calculatePortfolioData(roiData.roi, roiData2.roi2, roiData3.roi);
    createPortfolioPieChart(portfolioData, canvas5);
}

