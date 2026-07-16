document.addEventListener("DOMContentLoaded", function () {

    const attendanceModal =
        document.getElementById("attendanceModalOverlay");

    const markAttendanceBtn =
        document.getElementById("markAttendanceBtn");

    const modalCloseBtn =
        document.querySelector(".attendance-modal .modal-close");

    const modalCancelBtn =
        document.querySelector(".attendance-cancel");

    console.log(attendanceModal);
    console.log(markAttendanceBtn);

    if(markAttendanceBtn){

        markAttendanceBtn.addEventListener("click", function(){

            attendanceModal.style.display = "flex";

        });

    }

    if(modalCloseBtn){

        modalCloseBtn.addEventListener("click", function(){

            attendanceModal.style.display = "none";

        });

    }

    if(modalCancelBtn){

        modalCancelBtn.addEventListener("click", function(){

            attendanceModal.style.display = "none";

        });

    }

    if(attendanceModal){

        attendanceModal.addEventListener("click", function(e){

            if(e.target === attendanceModal){

                attendanceModal.style.display = "none";

            }

        });

    }

});