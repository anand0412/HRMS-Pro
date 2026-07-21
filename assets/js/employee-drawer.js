/*==================================================
    HRMS PRO
    Employee Drawer Component
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initEmployeeDrawer();

});

function initEmployeeDrawer() {

    const overlay = document.getElementById("employeeDrawerOverlay");
    const drawer = document.querySelector(".employee-drawer");
    const closeBtn = document.querySelector(".drawer-close");

    if (!overlay) return;

    // Close button
    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            overlay.style.display = "none";

        });

    }

    // Click outside drawer
    overlay.addEventListener("click", (e) => {

        if (e.target === overlay) {

            overlay.style.display = "none";

        }

    });

    // Tabs
    const tabs = overlay.querySelectorAll(".drawer-tab");
    const panels = overlay.querySelectorAll(".drawer-tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");

            const panel = document.getElementById(
                tab.dataset.tab + "-tab"
            );

            if (panel) {

                panel.classList.add("active");

            }

        });

    });

}