// ==============================
// HRMS Pro Login
// ==============================

// Password show/hide

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

}


// Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // For UI development only.
        // Authentication will be connected later.

        window.location.href = "dashboard.html";

    });

}