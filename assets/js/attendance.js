document.addEventListener("DOMContentLoaded", () => {

    console.log("Attendance Page Loaded");

    const attendanceModal = 
        new HRMSModal("attendanceModal");
    const attendanceForm =
        document.getElementById("attendanceForm");
    const attendanceDate =
        document.getElementById("attendanceDate");
    const statusCards =
        document.querySelectorAll(".attendance-status-card");

    const timeRow =
        document.getElementById("attendanceTimeRow");

    const remarksGroup =
    document.getElementById("remarksGroup");

    const remarksLabel =
        remarksGroup.querySelector("label");

    const employee = document.getElementById("attendanceEmployee");
    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");
    const remarks = document.getElementById("remarks");
    const employeeError = document.getElementById("employeeError");
    const dateError = document.getElementById("dateError");
    const checkInError = document.getElementById("checkInError");
    const checkOutError = document.getElementById("checkOutError");
    const remarksError = document.getElementById("remarksError");

    const markAttendanceBtn = document.getElementById("markAttendanceBtn");

    const cancelAttendance = document.getElementById("cancelAttendance");

    if (markAttendanceBtn) {

        function resetAttendanceForm() {

        if (attendanceForm) {
            attendanceForm.reset();
        }

        // Set today's date
        attendanceDate.value = new Date().toISOString().split("T")[0];

        // Reset status cards
        statusCards.forEach(card => {
            card.classList.remove("active");
        });

            document.getElementById("statusPresent").classList.add("active");

            // Show time row
            timeRow.style.display = "grid";
            remarksLabel.textContent = "Remarks (Optional)";
        }

        markAttendanceBtn.addEventListener("click", () => {

            resetAttendanceForm();

            attendanceModal.open();

        });

    }

    if (cancelAttendance) {

        cancelAttendance.addEventListener("click", () => {

            attendanceModal.close();

        });

    }

    /* ============================================
   Attendance Status Cards
    ============================================ */

    statusCards.forEach(card => {

        card.addEventListener("click", () => {

            statusCards.forEach(c => {

                c.classList.remove("active");

            });

            card.classList.add("active");

            const status =
                card.querySelector("input").value;

            switch (status) {

                case "Present":

                    timeRow.style.display = "grid";
                    remarksLabel.textContent = "Remarks (Optional)";
                    break;

                case "Half Day":

                    timeRow.style.display = "grid";
                    remarksLabel.textContent = "Reason for Half Day";
                    break;

                case "Absent":

                    timeRow.style.display = "none";
                    remarksLabel.textContent = "Reason for Absence";
                    break;

                case "Leave":

                    timeRow.style.display = "none";
                    remarksLabel.textContent = "Leave Reason";
                    break;
            }

        });

    });

});