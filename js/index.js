document.addEventListener("DOMContentLoaded",function(){
    /*Menu Button Code*/ 
    const menuBtn = document.querySelector(".menu-btn");
    const sideBar = document.querySelector(".sideBar");
    menuBtn.addEventListener("click",function(){
    sideBar.classList.add("active");
    menuBtn.style.visibility="hidden";
   });
   
   /*close Button Code*/ 
   const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function(){
    sideBar.classList.remove("active");
    menuBtn.style.visibility="visible";
    });

    /*Sub Menu Code*/
    const subMenuBtns = document.querySelectorAll(".sub-btn");

    subMenuBtns.forEach((btn)=>{
        btn.addEventListener("click", function(event){
            event.preventDefault();
            const container = document.getElementById(this.dataset.container);

            if(!container.classList.contains("active")){
                //add rotate to arrow
                this.querySelector(".drop-down").classList.add("rotate");
                //add active to sub menu
                container.classList.add("active");
                container.style.height="auto";
                const height= container.clientHeight + "px";
                container.style.height="0px";
                setTimeout(function(){
                    container.style.height=height;
                }, 0)
              
            }else{
                //remove active from sub menu
                container.style.height="0px";
                this.querySelector(".drop-down").classList.remove("rotate");
                container.addEventListener("transitionend",function(){
                    container.classList.remove("active");
                },
                { once:true,});
            } 
        });
    });

});
