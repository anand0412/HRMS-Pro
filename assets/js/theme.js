/* ==========================================================
   HRMS PRO
   Theme
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("themeToggle");

    const body = document.body;

    /* Load Saved Theme */

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        body.classList.add("dark");

    }

    if(themeButton){

        themeButton.addEventListener("click",()=>{

            body.classList.toggle("dark");

            if(body.classList.contains("dark")){

                localStorage.setItem("theme","dark");

            }else{

                localStorage.setItem("theme","light");

            }

        });

    }

});