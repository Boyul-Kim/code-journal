var $avatarURL = document.querySelector('#avatar');
// var $imageSource = document.querySelector('.imageSource');

function avatarFunction(event) {
  // $imageSource.setAttribute('src', event.target.value);
}
$avatarURL.addEventListener('blur', avatarFunction);
