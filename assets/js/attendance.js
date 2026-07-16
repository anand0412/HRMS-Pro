/*=========================================================
    MARK ATTENDANCE MODAL
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const attendanceModal =
        document.getElementById("attendanceModalOverlay");

    const markAttendanceBtn =
        document.getElementById("markAttendanceBtn");

    const modalCloseBtn =
        document.querySelector(".attendance-modal .modal-close");

    const modalCancelBtn =
        document.querySelector(".attendance-cancel");

    /* Open Modal */

    if(markAttendanceBtn){

        markAttendanceBtn.addEventListener("click", function(){

            attendanceModal.style.display = "flex";

        });

    }

    /* Close Button */

    if(modalCloseBtn){

        modalCloseBtn.addEventListener("click", function(){

            attendanceModal.style.display = "none";

        });

    }

    /* Cancel Button */

    if(modalCancelBtn){

        modalCancelBtn.addEventListener("click", function(){

            attendanceModal.style.display = "none";

        });

    }

    /* Click Outside */

    if(attendanceModal){

        attendanceModal.addEventListener("click", function(e){

            if(e.target === attendanceModal){

                attendanceModal.style.display = "none";

            }

        });

    }

    /* ESC Key */

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape" && attendanceModal){

            attendanceModal.style.display = "none";

        }

    });

});