const workforceChart = new Chart(
    document.getElementById("workforceChart"),
    {
        type: "line",
        data: {
            labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            datasets: [
                {
                    label: "Employees",
                    data: [4100,4150,4180,4220,4270,4300,4350,4390,4420,4480,4550,4620],
                    borderColor: "#4F46E5",
                    tension: 0.45,
                    fill: false
                }
            ]
        },
        options:{
            responsive:true,
            plugins:{
                legend:{display:false}
            }
        }
    }
);