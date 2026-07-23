document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebarToggle");
    const mobileToggle = document.getElementById("mobileSidebarToggle");

    /* Navigation */

    const navItems = document.querySelectorAll(".nav-item");

    /* Accordion */

    const groupHeaders = document.querySelectorAll(".menu-group-header");

    /* ===========================
       Restore Collapse State
    =========================== */

    if (localStorage.getItem("sidebarCollapsed") === "true") {
        sidebar.classList.add("collapsed");
    }

    /* ===========================
       Collapse Toggle
    =========================== */

    if (toggle) {

        toggle.addEventListener("click", () => {

            sidebar.classList.toggle("collapsed");

            localStorage.setItem(
                "sidebarCollapsed",
                sidebar.classList.contains("collapsed")
            );

        });

    }

    /* ===========================
       Mobile Sidebar
    =========================== */

    if (mobileToggle) {

        mobileToggle.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }

    /* ===========================
       Active Menu
    =========================== */

    navItems.forEach(item => {

        item.addEventListener("click", function () {

            navItems.forEach(i => i.classList.remove("active"));

            this.classList.add("active");

            if (window.innerWidth < 992) {
                sidebar.classList.remove("show");
            }

        });

    });

    /* ===========================
       Accordion
    =========================== */

    groupHeaders.forEach(header => {

        header.addEventListener("click", () => {

                if(sidebar.classList.contains("collapsed")){
                    return;
                }

                const group = header.parentElement;

                document.querySelectorAll(".menu-group").forEach(item => {

                    if(item !== group){
                        item.classList.remove("open");
                    }

                });

                group.classList.toggle("open");

            });

    });

    /* ===========================
       Auto Open Active Group
    =========================== */

    const activeSubmenu = document.querySelector(".submenu-item.active");

    if (activeSubmenu) {

        const group = activeSubmenu.closest(".menu-group");

        if (group) {
            group.classList.add("open");
        }

    }

    /* ===========================
       Close Mobile on Resize
    =========================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth >= 992) {
            sidebar.classList.remove("show");
        }

    });

});