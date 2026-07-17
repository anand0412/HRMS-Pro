document.addEventListener("DOMContentLoaded", () => {

    console.log("Attendance Page Loaded");

    const attendanceModal = new HRMSModal("attendanceModal");

    const markAttendanceBtn = document.getElementById("markAttendanceBtn");

    const cancelAttendance = document.getElementById("cancelAttendance");

    if (markAttendanceBtn) {

        markAttendanceBtn.addEventListener("click", () => {

            attendanceModal.open();

        });

    }

    if (cancelAttendance) {

        cancelAttendance.addEventListener("click", () => {

            attendanceModal.close();

        });

    }

});