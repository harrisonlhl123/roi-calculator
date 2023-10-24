import { Chart } from 'chart.js';

let portfolioPieChart = null; // Define a variable to store the portfolio pie chart instance

export function createPortfolioPieChart(data, canvasElement) {
    // Destroy the previous portfolio pie chart if it exists
    if (portfolioPieChart) {
        portfolioPieChart.destroy();
    }

    const ctx = canvasElement.getContext('2d');

    portfolioPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Stocks', 'Cash & Bonds', 'Alt Assets'],
            datasets: [{
                data: data,
                backgroundColor: ['blue', 'green', 'orange'], // Customize colors as needed
            }],
        },
        options: {
            title: {
                display: true,
                text: 'Portfolio Breakdown',
                fontSize: 16,
            },
        },
    });
}

