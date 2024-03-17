import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    (function() {
      const paragraphs = document.querySelectorAll(".p");
   
      paragraphs.forEach(element => {
         if (element.textContent.length > 130) {
            element.textContent = element.textContent.slice(0, 130) + '...';
      }
      else{
        console.log('jjkhk');
      }
     });
    })();
    (function () {
      let bx_x=document.querySelector('.bx-x');
      let bx_menu=document.querySelector('.bx-menu');
      let main_nav=document.querySelector('.main-nav');

      bx_menu.addEventListener('click', ()=>{
        bx_menu.style.display="none";
        bx_x.style.display="block";
        main_nav.style.display="block";
      });

      bx_x.addEventListener('click', ()=>{
        bx_x.style.display="none";
        bx_menu.style.display="block";
        main_nav.style.display="none";
      });
     
    })();
  }, [pathname]);
}

export default ScrollPage;