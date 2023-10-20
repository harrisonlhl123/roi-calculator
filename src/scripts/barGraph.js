// barGraph.js

export function createBarGraph(canvas, roi) {
    new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["ROI"],
        datasets: [
          {
            label: "Return On Investment",
            data: [roi],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
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
  }
  



  
  