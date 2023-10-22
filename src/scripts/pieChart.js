// pieChart.js
import { Chart } from 'chart.js';

export function createPieChart(totalDeposits, totalInterest, canvasId) {
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

    new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
    });
}

