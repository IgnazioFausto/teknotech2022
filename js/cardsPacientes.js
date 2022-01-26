const boldButton = document.getElementById('card-lite-cont');
const text = document.getElementById('contenido-lite');

/* boldButton.addEventListener('click', function () {
    text.classList.toggle('cont-lite-active');

});
 */
boldButton.addEventListener('mouseover', function () {
       if (text.classList.contains('cont-lite-active')) {
         text.classList.remove('cont-lite-active');
       } else {
         text.classList.add('cont-lite-active');
       }
     });
     
text.addEventListener('mouseleave', function () {
 
      text.classList.remove('cont-lite-active');

  });