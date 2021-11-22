new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
      {
        data: [100, 120, 280, 150, 130, 295, 220, 480],
        label: "401",
        borderColor: "transparent",
        fill: true,
        backgroundColor: "#FFF8E4",
        pointBackgroundColor: "#ffc32c",
        tension: 0,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "WEEKLY PROJECT VIEWS",
    },
    elements: {
      point: {
        radius: 6,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            padding: 40,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 100,
            padding: 20,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
          },
        },
      ],
    },
  },
});
