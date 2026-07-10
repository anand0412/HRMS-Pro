document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebarToggle");
    const mobileToggle = document.getElementById("mobileSidebarToggle");
    const navItems = document.querySelectorAll(".nav-item");

    if(toggle){

        toggle.addEventListener("click",()=>{

            sidebar.classList.toggle("collapsed");

        });

    }

    if(mobileToggle){

        mobileToggle.addEventListener("click",()=>{

            sidebar.classList.toggle("show");

        });

    }

    navItems.forEach(item=>{

        item.addEventListener("click",function(){

            navItems.forEach(i=>i.classList.remove("active"));

            this.classList.add("active");

            if(window.innerWidth<992){

                sidebar.classList.remove("show");

            }

        });

    });

});