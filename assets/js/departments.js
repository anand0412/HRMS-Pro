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

    function clearFieldError(field, errorElement) {

        if (field) {
            field.classList.remove("input-error");
        }

        if (errorElement) {
            errorElement.textContent = "";
        }

    }

    function validateAttendanceForm(){

        clearErrors();

        let isValid = true;

        let firstInvalidField = null;

        const selectedStatus =
        document.querySelector(
            ".attendance-status-card.active input"
        ).value;

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

        if (
            (selectedStatus === "Present" ||
            selectedStatus === "Half Day") &&
            checkIn.value === ""
        ) {

            showError(
                checkIn,
                checkInError,
                "Please enter check-in time."
            );

            isValid = false;

            firstInvalidField ??= checkIn;
        }

        if (
            (selectedStatus === "Present" ||
            selectedStatus === "Half Day") &&
            checkOut.value === ""
        ) {

            showError(
                checkOut,
                checkOutError,
                "Please enter check-out time."
            );

            isValid = false;

            firstInvalidField ??= checkOut;
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

    /* ============================================
    Live Validation
    ============================================ */

    employee.addEventListener("change", () => {
        clearFieldError(employee, employeeError);
    });

    attendanceDate.addEventListener("change", () => {
        clearFieldError(attendanceDate, dateError);
    });

    checkIn.addEventListener("input", () => {
        clearFieldError(checkIn, checkInError);
    });

    checkOut.addEventListener("input", () => {
        clearFieldError(checkOut, checkOutError);
    });

    remarks.addEventListener("input", () => {
        clearFieldError(remarks, remarksError);
    });

    /* ============================================
    Attendance Form Submit
    ============================================ */

    attendanceForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (!validateAttendanceForm()) {
            return;
        }

        // Show loading state
        startButtonLoading(saveAttendanceBtn);

        // Simulate server save
        setTimeout(() => {

            // Restore button
            stopButtonLoading(saveAttendanceBtn);

            // Show success message
            showToast(
                "success",
                "Attendance saved successfully."
            );

            // Reset form
            resetAttendanceForm();

            // Close modal
            attendanceModal.close();

        }, 1000);

    });

    /* ============================================
        Toast Engine
        ============================================ */

        function showToast(type, message) {

            const container = document.getElementById("toastContainer");

            const icons = {
                success: "✓",
                error: "✕",
                warning: "⚠",
                info: "ℹ"
            };

            const toast = document.createElement("div");

            toast.className = `toast ${type}`;

            toast.innerHTML = `
                <div class="toast-icon">${icons[type]}</div>

                <div class="toast-message">
                    ${message}
                </div>

                <button class="toast-close">&times;</button>

                <div class="toast-progress"></div>
            `;

            container.appendChild(toast);

            requestAnimationFrame(() => {
                toast.classList.add("show");
            });

            const removeToast = () => {

                toast.classList.remove("show");

                setTimeout(() => {

                    toast.remove();

                }, 350);

            };

            toast
                .querySelector(".toast-close")
                .addEventListener("click", removeToast);

            setTimeout(removeToast, 3000);

        }

        /* ============================================
        Loading Button Helpers
        ============================================ */

        function startButtonLoading(button){

            button.disabled = true;

            button.classList.add("loading");

        }

        function stopButtonLoading(button){

            button.disabled = false;

            button.classList.remove("loading");

        }

});

/* ==========================================
   TABLE ACTION MENU
========================================== */

const actionButtons = document.querySelectorAll(".action-trigger");

actionButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.stopPropagation();

        document.querySelectorAll(".action-menu").forEach(menu => {

            if (menu !== this.nextElementSibling) {
                menu.classList.remove("show");
            }

        });

        this.nextElementSibling.classList.toggle("show");

    });

});

document.addEventListener("click", () => {

    document.querySelectorAll(".action-menu").forEach(menu => {

        menu.classList.remove("show");

    });

});

/* ==========================================
   VIEW EMPLOYEE
========================================== */

document.querySelectorAll(".action-view-employee").forEach(button => {

    button.addEventListener("click", function (e) {

        e.stopPropagation();

        document.querySelectorAll(".action-menu").forEach(menu => {

            menu.classList.remove("show");

        });

        document.getElementById("employeeDrawerOverlay").style.display = "flex";

    });

});

const entityDialog = document.getElementById("entityDialog");

document.querySelectorAll(".view-department").forEach(btn=>{

    btn.addEventListener("click",()=>{

        entityDialog.classList.add("show");

    });

});

document
.getElementById("closeEntityDialog")
.addEventListener("click",()=>{

    entityDialog.classList.remove("show");

});

entityDialog.addEventListener("click",(e)=>{

    if(e.target===entityDialog){

        entityDialog.classList.remove("show");

    }

});