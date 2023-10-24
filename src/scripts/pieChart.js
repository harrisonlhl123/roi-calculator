import { Chart } from 'chart.js';

let pieChart = null; // Define a variable to store the pie chart instance

export function createPieChart(totalDeposits, totalInterest, canvasId) {
    // Destroy the previous pie chart if it exists
    if (pieChart) {
        pieChart.destroy();
    }

    const pieChartData = {
        labels: ['Total Deposits', 'Total Interest Earned'],
        datasets: [
            {
                data: [totalDeposits, totalInterest],
                backgroundColor: ['blue', 'green'],
            },
        ],
    };

    const ctx = document.getElementById(canvasId).getContext('2d');

    pieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
    });
}





