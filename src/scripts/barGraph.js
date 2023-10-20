import { Chart } from 'chart.js/auto';

export function createBarGraph(canvas, roiData) {
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: roiData.years, // An array of years as labels
            datasets: [
                {
                    label: 'Return On Investment',
                    data: roiData.roiValues, // An array of ROI values for each year
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



  
  