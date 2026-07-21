/*==================================================
    Drawer Tabs
==================================================*/

function initDrawerTabs(){

    const tabs=document.querySelectorAll(".drawer-tab");

    const panels=document.querySelectorAll(".drawer-tab-content");

    if(!tabs.length) return;

    tabs.forEach(tab=>{

        tab.addEventListener("click",()=>{

            tabs.forEach(t=>t.classList.remove("active"));

            panels.forEach(panel=>panel.classList.remove("active"));

            tab.classList.add("active");

            const target=tab.dataset.tab;

            const panel=document.getElementById(target+"-tab");

            if(panel){

                panel.classList.add("active");

            }

        });

    });

}