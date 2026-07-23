/*=========================================================
    EMPLOYEE DETAILS DRAWER
=========================================================*/

function openEmployeeModal(){

    openEmployeeModal();

    document.body.style.overflow = "hidden";

}

function closeEmployeeModal(){

    closeEmployeeModal();

    document.body.style.overflow = "";

}

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

            closeEmployeeModal();

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

       openEmployeeModal();

    });

}

/* Close Button */

if(modalCloseBtn){

    modalCloseBtn.addEventListener("click", function(){

        closeEmployeeModal();

    });

}

/* Cancel Button */

if(modalCancelBtn){

    modalCancelBtn.addEventListener("click", function(){

        closeEmployeeModal();

    });

}

/* Click Outside */

if(employeeModal){

    employeeModal.addEventListener("click", function(e){

        if(e.target === employeeModal){

            closeEmployeeModal();

        }

    });

}

/* ESC Key */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape" && employeeModal){

        closeEmployeeModal();

    }

});

/* ==========================================
   Open Employee Form from Dashboard
========================================== */

const params = new URLSearchParams(window.location.search);

if (params.get("action") === "add") {

    openEmployeeModal();

    // Remove the query string so refresh doesn't reopen it
    history.replaceState(
        {},
        "",
        window.location.pathname
    );

}

});