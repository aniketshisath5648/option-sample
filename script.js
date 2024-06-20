
    var swift = new Swiper(".myswift", {
     slidesPerView: 4,
            spaceBetween: 30,
            freeMode: true,
            autoplay:{
              delay:1000,
            },
            mousewheel:true,
            keyboard:{
              enable:true,
            },
            loop:true,
            breakpoints: {
              320:{
                slidesPerView: 1,
                spaceBetween: 20,
              },
              375:{
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              425:{
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            },
          });
          document.addEventListener("DOMContentLoaded", function() {
            const serviceButtons = document.querySelectorAll('.service-buttons h3');
            console.log(serviceButtons); // Check if the elements are being selected correctly
          
            serviceButtons.forEach(button => {
              console.log(button); // Check if each button is being iterated correctly
              button.addEventListener('click', () => {
                const target = button.getAttribute('data-target');
                console.log(target); // Check if the target value is being retrieved correctly
                const currentActive = document.querySelector('.cards.active');
                console.log(currentActive); // Check if the currently active card is being selected correctly
                currentActive.classList.remove('active');
                document.getElementById(target).classList.add('active');
              });
            });
          });
