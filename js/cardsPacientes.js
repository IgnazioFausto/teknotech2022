const cardLite = document.getElementById('card-lite-cont');
const contLite = document.getElementById('contenido-lite');

cardLite.addEventListener('mouseover', function () {
  if (contLite.classList.contains('cont-lite-active')) {
    contLite.classList.remove('cont-lite-active');
  } else {
    contLite.classList.add('cont-lite-active');
  }
});

contLite.addEventListener('mouseleave', function () {

  contLite.classList.remove('cont-lite-active');

});

const cardPro = document.getElementById('card-pro-cont');
const contPro = document.getElementById('contenido-pro');

cardPro.addEventListener('mouseover', function () {
  if (contPro.classList.contains('cont-pro-active')) {
    contPro.classList.remove('cont-pro-active');
  } else {
    contPro.classList.add('cont-pro-active');
  }
});
contPro.addEventListener('mouseleave', function () {

  contPro.classList.remove('cont-pro-active');

});

const cardStd = document.getElementById('card-std-cont');
const contStd = document.getElementById('contenido-std');

cardStd.addEventListener('mouseover', function () {
  if (contStd.classList.contains('cont-std-active')) {
    contStd.classList.remove('cont-std-active');
  } else {
    contStd.classList.add('cont-std-active');
  }
});
contStd.addEventListener('mouseleave', function () {

  contStd.classList.remove('cont-std-active');

});