import { Chart } from 'chart.js/auto';

export function createCashAndBondsGraph(canvas, roiData) {
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: roiData.years2,
            datasets: [
                {
                    label: 'Return On Investment',
                    data: roiData.roiValues2,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
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
}
