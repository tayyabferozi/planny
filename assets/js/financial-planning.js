new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        data: [100, 120, 280, 150, 130, 295, 220, 480],
        label: "401",
        borderColor: "transparent",
        fill: true,
        backgroundColor: "#FFF8E4",
        tension: 0,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "WEEKLY PROJECT VIEWS",
    },
  },
});
