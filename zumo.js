let menu = document.querySelector('.fa-fish');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
     
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

      //SLIDE-UP SCRIPT
      $(`.scroll-up-btn`).click(function(){
        $('html').animate({scrollTop: 0});
    });
});