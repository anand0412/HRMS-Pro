document.addEventListener("DOMContentLoaded", function () {

    console.log("attendance.js loaded");

    const btn = document.getElementById("markAttendanceBtn");
    const modal = document.getElementById("attendanceModalOverlay");

    console.log("Button:", btn);
    console.log("Modal:", modal);

    if (!btn) {
        console.log("Button NOT found");
        return;
    }

    if (!modal) {
        console.log("Modal NOT found");
        return;
    }

    btn.addEventListener("click", function () {

        console.log("Button Clicked");

        modal.style.display = "flex";

    });

});