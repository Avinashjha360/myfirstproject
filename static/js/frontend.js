let menu = document.getElementById('menu');
let menu_bar=document.getElementById('menu_bar');
        
        function menuchange() {

            if (menu.innerHTML!="close"&&menu_bar.style.animationPlayState!="running") {
                menu_bar.style.display="flex";
                menu.innerHTML="close"; 
                menu_bar.style.animationPlayState="running"           
            }
            else {
                menu.innerHTML="menu";
                menu_bar.style.display="none";
                menu_bar.style.animationPlayState="paused" 
            }
            
        }