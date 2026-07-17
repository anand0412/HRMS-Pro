/* ==========================================================
   HRMS PRO
   UNIVERSAL MODAL ENGINE
========================================================== */

class HRMSModal {

    constructor(modalId) {

        this.overlay = document.getElementById(modalId);

        if (!this.overlay) return;

        this.modal = this.overlay.querySelector(".attendance-modal");

        this.closeBtn = this.overlay.querySelector(".attendance-close-btn");

        this.init();

    }

    init() {

        if (this.closeBtn) {

            this.closeBtn.addEventListener("click", () => this.close());

        }

        this.overlay.addEventListener("click", (e) => {

            if (e.target === this.overlay) {

                this.close();

            }

        });

        document.addEventListener("keydown", (e) => {

            if (e.key === "Escape") {

                this.close();

            }

        });

    }

    open() {

        document.body.style.overflow = "hidden";

        this.overlay.classList.add("show");

    }

    close() {

        document.body.style.overflow = "";

        this.overlay.classList.remove("show");

    }

}