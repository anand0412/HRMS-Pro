/* ==========================================================
   HRMS PRO
   Sidebar
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");

    const toggle = document.getElementById("sidebarToggle");

    if (toggle && sidebar) {

        toggle.addEventListener("click", () => {

            sidebar.classList.toggle("collapsed");

        });

    }

    /* Active Navigation */

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", function () {

            navItems.forEach(i => {

                i.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

});