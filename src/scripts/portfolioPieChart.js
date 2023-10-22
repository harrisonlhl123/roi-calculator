// portfolioPieChart.js
import { Chart } from 'chart.js';

export function createPortfolioPieChart(data, canvasElement) {
    const ctx = canvasElement.getContext('2d');

    new Chart(ctx, {
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
