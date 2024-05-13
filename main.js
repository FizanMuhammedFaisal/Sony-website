
 /* for changing icon size */
 function updateClass() {
    var list = document.querySelectorAll('.icon-size');
    var width = window.innerWidth;
   list.forEach(function(element){
    if (width < 993) {
      element.classList.remove('fa-xl');
      element.classList.add('fa-lg');
    } else {
      element.classList.remove('fa-lg'); 
      element.classList.add('fa-xl'); 
    }
   })
    
  }
  
 
  updateClass();
  updateClassflex();
  window.addEventListener('resize', updateClass);
/* for adding d-flex on icon */
  function updateClassflex(){
    var width= window.innerWidth;
    var icon=document.getElementById('icon-flexing');
     if(width < 993){
        icon.classList.remove('d-flex')
     }else{
        icon.classList.add('d-flex')
     }

  }
  window.addEventListener('resize', updateClassflex);





  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      993: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });