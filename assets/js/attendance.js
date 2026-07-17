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
    const saveAttendanceBtn = document.getElementById("saveAttendanceBtn");

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

    /* ============================================
    Validation Helpers
    ============================================ */

    function clearErrors() {

        const fields = [
            employee,
            attendanceDate,
            checkIn,
            checkOut,
            remarks
        ];

        const errors = [
            employeeError,
            dateError,
            checkInError,
            checkOutError,
            remarksError
        ];

        fields.forEach(field => {

            if(field){
                field.classList.remove("input-error");
            }

        });

        errors.forEach(error => {

            if(error){
                error.textContent = "";
            }

        });

    }

    function showError(field, errorElement, message){

        if(field){
            field.classList.add("input-error");
        }

        if(errorElement){
            errorElement.textContent = message;
        }

    }

    function validateAttendanceForm(){

        clearErrors();

        let isValid = true;

        let firstInvalidField = null;

        // Employee

        if(employee.value === ""){

            showError(
                employee,
                employeeError,
                "Please select an employee."
            );

            isValid = false;

            firstInvalidField ??= employee;

        }

        // Date

        if(attendanceDate.value === ""){

            showError(
                attendanceDate,
                dateError,
                "Please select a date."
            );

            isValid = false;

            firstInvalidField ??= attendanceDate;

        }

        if(firstInvalidField){

            firstInvalidField.focus();

        }

        return isValid;

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

/* ============================================
   Attendance Form Submit
============================================ */

attendanceForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!validateAttendanceForm()) {

        return;

    }

    console.log("Attendance validation passed.");

});