/* ==========================================================
   HRMS PRO Dashboard
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Payroll Line Chart */

    const payrollChart = document.querySelector("#payrollChart");

    if(payrollChart){

        const payrollOptions = {

            chart:{
                type:"line",
                height:320,
                toolbar:{
                    show:false
                },
                zoom:{
                    enabled:false
                }
            },

            series:[{

                name:"Payroll",

                data:[42,52,48,63,72,70,82]

            }],

            xaxis:{

                categories:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ]

            },

            stroke:{

                curve:"smooth",

                width:4

            },

            colors:["#4F46E5"],

            grid:{

                borderColor:"#ECEFF5"

            },

            dataLabels:{
                enabled:false
            },

            legend:{
                show:false
            }

        };

        new ApexCharts(
            payrollChart,
            payrollOptions
        ).render();

    }

    /* Attendance Chart */

    const attendanceChart=document.querySelector("#attendanceChart");

    if(attendanceChart){

        const attendanceOptions={

            chart:{
                type:"donut",
                height:320
            },

            series:[82,11,7],

            labels:[
                "Present",
                "Leave",
                "Absent"
            ],

            colors:[
                "#16A34A",
                "#F59E0B",
                "#EF4444"
            ],

            legend:{
                position:"bottom"
            },

            dataLabels:{
                enabled:false
            }

        };

        new ApexCharts(
            attendanceChart,
            attendanceOptions
        ).render();

    }

});