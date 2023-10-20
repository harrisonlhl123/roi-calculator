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




// index.js

// import { createBarGraph } from "./scripts/barGraph"

// document.addEventListener('DOMContentLoaded', function () {
//   // Your JavaScript code here

//   // Sample data for the bar graph
//   const data = [
//     { year: 1, value: 1000 },
//     { year: 2, value: 1500 },
//     // Add more data points...
//   ];

//   // Container element ID for the bar graph
//   const containerId = 'barGraph';

//   // Create the bar graph
//   createBarGraph(data, containerId);
// });





// import { calculateROI } from "./scripts/stocks";
// import { createBarGraph, updateBarGraph } from "./scripts/barGraph"; // Import the new graph functions

// document.addEventListener("DOMContentLoaded", function () {
//     // Your JavaScript code here

//     const form = document.getElementById("stocksForm");
//     const initialDepositInput = document.getElementById("initialDeposit");
//     const yearlyDepositInput = document.getElementById("yearlyDeposit");
//     const desiredReturnsInput = document.getElementById("desiredReturns");
//     const yearsInvestedInput = document.getElementById("yearsInvested");
//     const resultElement = document.getElementById("resultForStocks");

//     // Initialize the bar graph with empty data
//     const chart = createBarGraph("barGraph", [], []);

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         // Get input values from the form
//         const initialDeposit = parseFloat(initialDepositInput.value);
//         const yearlyDeposit = parseFloat(yearlyDepositInput.value);
//         const desiredReturns = parseFloat(desiredReturnsInput.value);
//         const yearsInvested = parseFloat(yearsInvestedInput.value);

//         // Calculate ROI
//         const roiData = [];
//         for (let year = 1; year <= yearsInvested; year++) {
//             const roi = calculateROI(initialDeposit, yearlyDeposit, desiredReturns, year).roi;
//             roiData.push(roi);
//         }

//         // Update the bar graph with new data
//         updateBarGraph(chart, roiData, Array.from({ length: yearsInvested }, (_, i) => i + 1));

//         // Display the result
//         resultElement.innerHTML = `<p>Your Return On Investment (ROI) is ${roiData[roiData.length - 1]} over ${yearsInvested} years.</p>`;
//     });
// });


// import Chart from "chart.js";
import { Chart } from 'chart.js/auto';

// import { calculateROI } from "./scripts/stocks";

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

        // Create a chart
        new Chart(canvas, {
            type: "bar", // Bar chart type
            data: {
                labels: ["ROI"],
                datasets: [
                    {
                        label: "Return On Investment",
                        data: [roi],
                        backgroundColor: "rgba(75, 192, 192, 0.2)", // Adjust colors as needed
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Display the result
        const resultElement = document.getElementById("resultForStocks");
        resultElement.innerHTML = `<p>Your Return On Investment (ROI) is ${roi} over ${calculatedYears} years.</p>`;
    });
});




