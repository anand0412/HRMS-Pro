document.addEventListener("DOMContentLoaded", () => {

    console.log("Attendance JS Loaded");

    const openBtn =
        document.getElementById("markAttendanceBtn");

    const modal =
        document.getElementById("attendanceModal");

    const closeBtn =
        document.getElementById("closeAttendanceModal");

    openBtn.addEventListener("click", () => {

        modal.style.display = "flex";

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

});