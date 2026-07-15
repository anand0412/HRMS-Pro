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

    maintainAspectRatio:false,

    plugins:{

        legend:{

            display:false

        },

        tooltip:{

            backgroundColor:"#0F172A",

            titleColor:"#FFFFFF",

            bodyColor:"#FFFFFF",

            padding:12,

            cornerRadius:10

        }

    },

    scales:{

        y:{

            grid:{

                color:"#EEF2F7"

            }

        },

        x:{

            grid:{

                display:false

            }

        }

    }

}
    }
);

const departmentChart = new Chart(
    document.getElementById("departmentChart"),
    {
        type: "bar",

        data: {
            labels: [
    "HR",
    "IT",
    "Finance",
    "Admin",
    "Sales",
    "Support"
],

data: [
    36,
    120,
    42,
    28,
    74,
    55
]

                backgroundColor: [
                    "#6366F1",
                    "#8B5CF6",
                    "#06B6D4",
                    "#22C55E",
                    "#F59E0B",
                    "#F97316",
                    "#CBD5E1"
                ],

                borderRadius: 8
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    backgroundColor: "#0F172A",

                    titleColor: "#FFFFFF",

                    bodyColor: "#FFFFFF",

                    padding: 12,

                    cornerRadius: 10

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {

                        color: "#EEF2F7"

                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    }
);