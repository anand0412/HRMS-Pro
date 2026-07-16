/*=========================================================
    EMPLOYEE DETAILS DRAWER
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const drawerOverlay = document.getElementById("employeeDrawerOverlay");

    const drawerClose = document.querySelector(".drawer-close");

    const employeeRows = document.querySelectorAll(".employee-row");

    /* Open Drawer */

    employeeRows.forEach(function(row){

        row.addEventListener("click", function(){

            drawerOverlay.style.display = "flex";

        });

    });

    /* Close Button */

    drawerClose.addEventListener("click", function(){

        drawerOverlay.style.display = "none";

    });

    /* Click Outside Drawer */

    drawerOverlay.addEventListener("click", function(e){

        if(e.target === drawerOverlay){

            drawerOverlay.style.display = "none";

        }

    });

    /* ESC Key */

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            drawerOverlay.style.display = "none";

        }

    });

});