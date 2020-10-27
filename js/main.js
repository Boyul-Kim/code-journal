var $avatarURL = document.querySelector('#avatar');
var $username = document.querySelector('#username');
var $fullname = document.querySelector('#fullname');
var $location = document.querySelector('#location');
var $bio = document.querySelector('.bio');
var $form = document.querySelector('form');
var $imageSource = document.querySelector('.imageSource');
var $save = document.querySelector('.button');

function avatarFunction(event) {
  $imageSource.setAttribute('src', event.target.value);
}
$avatarURL.addEventListener('blur', avatarFunction);

function saveFunction(event) {
  // console.log($username.value);
  data.profile.username = $username.value;
  data.profile.fullName = $fullname.value;
  data.profile.location = $location.value;
  data.profile.avatarUrl = $avatarURL.value;
  data.profile.bio = $bio.value;
  // console.log(data);
  event.preventDefault();
  $form.reset();
  $imageSource.setAttribute('src', 'images/placeholder-image-square.jpg');
}
$save.addEventListener('click', saveFunction);
