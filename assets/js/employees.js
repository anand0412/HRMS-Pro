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


/*---------------------------------------------------------
    OPEN MODAL
---------------------------------------------------------*/

function openEmployeeModal(){

    if(employeeModal){

        employeeModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


/*---------------------------------------------------------
    CLOSE MODAL
---------------------------------------------------------*/

function closeEmployeeModal(){

    if(employeeModal){

        employeeModal.style.display = "none";

        document.body.style.overflow = "";

    }

}


/*---------------------------------------------------------
    ADD EMPLOYEE BUTTON
---------------------------------------------------------*/

if(addEmployeeBtn){

    addEmployeeBtn.addEventListener("click", openEmployeeModal);

}


/*---------------------------------------------------------
    CLOSE BUTTON
---------------------------------------------------------*/

if(modalCloseBtn){

    modalCloseBtn.addEventListener("click", closeEmployeeModal);

}


/*---------------------------------------------------------
    CANCEL BUTTON
---------------------------------------------------------*/

if(modalCancelBtn){

    modalCancelBtn.addEventListener("click", closeEmployeeModal);

}


/*---------------------------------------------------------
    CLICK OUTSIDE MODAL
---------------------------------------------------------*/

if(employeeModal){

    employeeModal.addEventListener("click", function(e){

        if(e.target === employeeModal){

            closeEmployeeModal();

        }

    });

}


/*---------------------------------------------------------
    ESC KEY
---------------------------------------------------------*/

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeEmployeeModal();

    }

});


/*---------------------------------------------------------
    OPEN FROM DASHBOARD
---------------------------------------------------------*/

const params = new URLSearchParams(window.location.search);

if(params.get("action") === "add"){

    openEmployeeModal();

    history.replaceState(
        {},
        "",
        window.location.pathname
    );

}

});