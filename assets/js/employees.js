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

/*=========================================================
    ADD EMPLOYEE MODAL
=========================================================*/

const employeeModal =
    document.getElementById("employeeModalOverlay");

const addEmployeeBtn =
    document.getElementById("addEmployeeBtn");

const modalCloseBtn =
    document.querySelector(".modal-close");

const modalCancelBtn =
    document.querySelector(".modal-cancel");

/* Open Modal */

if(addEmployeeBtn){

    addEmployeeBtn.addEventListener("click", function(){

        employeeModal.style.display = "flex";

    });

}

/* Close Button */

if(modalCloseBtn){

    modalCloseBtn.addEventListener("click", function(){

        employeeModal.style.display = "none";

    });

}

/* Cancel Button */

if(modalCancelBtn){

    modalCancelBtn.addEventListener("click", function(){

        employeeModal.style.display = "none";

    });

}

/* Click Outside */

if(employeeModal){

    employeeModal.addEventListener("click", function(e){

        if(e.target === employeeModal){

            employeeModal.style.display = "none";

        }

    });

}

/* ESC Key */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape" && employeeModal){

        employeeModal.style.display = "none";

    }

});

});