/*==================================================
    HRMS PRO
    Service Book Management
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initServiceBookModal();

});


/*==================================================
    SERVICE BOOK MODAL
==================================================*/

function initServiceBookModal(){

    const modal = document.getElementById("serviceBookModalOverlay");

    const openBtn = document.getElementById("createServiceBookBtn");

    const closeBtn = modal.querySelector(".modal-close");

    if(openBtn){

        openBtn.addEventListener("click", () => {

            modal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    }

    if(closeBtn){

        closeBtn.addEventListener("click", closeModal);

    }

    modal.addEventListener("click", (e)=>{

        if(e.target===modal){

            closeModal();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeModal();

        }

    });

    function closeModal(){

        modal.classList.remove("show");

        document.body.style.overflow="";

    }

}