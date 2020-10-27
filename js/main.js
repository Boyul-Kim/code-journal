var $avatarURL = document.querySelector('#avatar');
var $imageSource = document.querySelector('.imageSource');
var $save = document.querySelector('.button');

function avatarFunction(event) {
  $imageSource.setAttribute('src', event.target.value);
}
$avatarURL.addEventListener('blur', avatarFunction);

function saveFunction(event) {
  // console.log('test');
}
$save.addEventListener('click', saveFunction);
