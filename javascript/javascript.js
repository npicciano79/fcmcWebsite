//FCMC website javascript 
const navSlide=()=>{
    const burger=document.querySelector('.menuBurger');
    const nav=document.querySelector('.navLinks');
    const navlinks=document.querySelectorAll('.navLinks li')

    burger.addEventListener('click',()=>{
        //toggel nav
        nav.classList.toggle('nav-active');

    //animate links

        navlinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation=''
                }else{
                    link.style.animation=`navLinkFade 0.5s ease fowards ${index/7+3}s`;    
                }     
                
            });
    //burger animation 
            burger.classList.toggle('toggle');



    });  

}

navSlide();

function pageLocation(pageKey){
    alert(pageKey);

}

function arrowHideShow(val){
    if (val==1){
        var x = document.getElementById('up-arrow');
        x.style.display='inline';
        var y= document.getElementById("down-arrow");
        y.style.display='none';
    }else{
        var x = document.getElementById('up-arrow');
        x.style.display='none';
        var y= document.getElementById("down-arrow");
        y.style.display='inline';
    }

}