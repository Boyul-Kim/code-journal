var $avatarURL = document.querySelector('#avatar');
var $username = document.querySelector('#username');
var $fullname = document.querySelector('#fullname');
var $location = document.querySelector('#location');
var $bio = document.querySelector('.bio');
var $form = document.querySelector('form');
var $imageSource = document.querySelector('.imageSource');
var $save = document.querySelector('.button');
var $editProfile = document.querySelector('[data-view="edit-profile"]');
var $profile = document.querySelector('[data-view="profile"]');

function switchDataView(dataView) {
  if (dataView === 'edit-profile') {
    $profile.setAttribute('hidden', 'hidden');
    $editProfile.removeAttribute('hidden');
  } else if (dataView === 'profile') {
    $editProfile.setAttribute('hidden', 'hidden');
    $profile.removeAttribute('hidden');
  } else {
    // console.log('invalid input');
  }
}

switchDataView('profile');

function avatarFunction(event) {
  $imageSource.setAttribute('src', event.target.value);
}
$avatarURL.addEventListener('blur', avatarFunction);

function saveFunction(event) {
  data.entries.push(data.profile);
  event.preventDefault();
  data.profile.username = $username.value;
  data.profile.fullName = $fullname.value;
  data.profile.location = $location.value;
  data.profile.avatarUrl = $avatarURL.value;
  data.profile.bio = $bio.value;
  $form.reset();
  $imageSource.setAttribute('src', 'images/placeholder-image-square.jpg');
}
$save.addEventListener('click', saveFunction);
