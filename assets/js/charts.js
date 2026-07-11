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

const departmentChart = new Chart(

document.getElementById("departmentChart"),

{

type:"bar",

data:{

labels:[

"HR",

"IT",

"Finance",

"Admin",

"Sales",

"Support"

],

datasets:[{

label:"Employees",

data:[

35,

120,

42,

28,

74,

55

],

backgroundColor:"#6366F1",

borderRadius:8

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

display:false

}

},

scales:{

y:{

beginAtZero:true,

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

});