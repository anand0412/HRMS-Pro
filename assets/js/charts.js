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
        }
    }
);

const departmentChart = new Chart(

document.getElementById("departmentChart"),

{

type:"bar",

data:{

labels:[

"IT",

"Finance",

"Administration",

"HR",

"Accounts",

"Engineering",

"Others"

],

datasets:[{

label:"Employees",

data:[

120,

74,

58,

41,

32,

27,

390

],

backgroundColor:[

"#6366F1",

"#8B5CF6",

"#06B6D4",

"#22C55E",

"#F59E0B",

"#F97316",

"#CBD5E1"

],

borderRadius:8

}]

},