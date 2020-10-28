// var $body = document.querySelector('body');
var $avatarURL = document.querySelector('#avatar');
var $username = document.querySelector('#username');
var $fullname = document.querySelector('#fullname');
var $location = document.querySelector('#location');
var $bio = document.querySelector('.bio');
var $form = document.querySelector('form');
var $imageSource = document.querySelector('.imageSource');
var $save = document.querySelector('.button');

/* var $imageSourceProfile = document.querySelector('.imageSourceProfile');
var $inputName = document.querySelector('.inputName');
var $inputUserName = document.querySelector('.inputUserName');
var $inputLocation = document.querySelector('.inputLocation');
var $inputBio = document.querySelector('.inputBio'); */

var $editProfile = document.querySelector('[data-view="edit-profile"]');
var $profile = document.querySelector('[data-view="profile"]');

function DOMtree(object) {
  var $profileContainer = document.createElement('div');
  $profileContainer.className = 'profileContainer';

  var $h1 = document.createElement('h1');
  $h1.className = 'inputName';
  $h1.textContent = object.entries[2].fullName;
  $profileContainer.appendChild($h1);

  var $row = document.createElement('div');
  $row.className = 'row';
  $profileContainer.appendChild($row);

  var $imageContainer = document.createElement('div');
  $imageContainer.className = 'imageContainer';
  $row.appendChild($imageContainer);

  var $imageSourceProfile = document.createElement('img');
  $imageSourceProfile.className = 'imageSourceProfile';
  $imageSourceProfile.setAttribute('src', object.entries[2].avatarUrl);
  $imageContainer.appendChild($imageSourceProfile);

  var $inputContainer = document.createElement('div');
  $inputContainer.className = 'inputContainer';
  $row.appendChild($inputContainer);

  var $inputProfile = document.createElement('div');
  $inputProfile.className = 'inputProfile';
  $inputContainer.appendChild($inputProfile);

  var $userIcon = document.createElement('i');
  $userIcon.className = 'fas fa-user';
  $inputProfile.appendChild($userIcon);
  var $inputUserName = document.createElement('div');
  $inputUserName.className = 'inputUserName';
  $inputUserName.textContent = object.entries[2].username;
  $inputProfile.appendChild($inputUserName);

  var $inputProfile2 = document.createElement('div');
  $inputProfile2.className = 'inputProfile';
  $inputContainer.appendChild($inputProfile2);

  var $userLocation = document.createElement('i');
  $userLocation.className = 'fas fa-compass';
  $inputProfile2.appendChild($userLocation);
  var $inputLocation = document.createElement('div');
  $inputLocation.className = 'inputLocation';
  $inputLocation.textContent = object.entries[2].location;
  $inputProfile2.appendChild($inputLocation);

  var $inputProfile3 = document.createElement('div');
  $inputProfile3.className = 'inputProfile inputBio';
  $inputProfile3.textContent = object.entries[2].bio;
  $inputContainer.appendChild($inputProfile3);

  return $profileContainer;
}

function switchDataView(dataView) {
  if (dataView === 'edit-profile') {
    $profile.setAttribute('hidden', 'hidden');
    $editProfile.removeAttribute('hidden');
    data.view = dataView;
  } else if (dataView === 'profile') {
    $profile.innerHTML = '';
    $profile.appendChild(DOMtree(data));
    $editProfile.setAttribute('hidden', 'hidden');
    $profile.removeAttribute('hidden');
    data.view = dataView;
  } else {
    // console.log('invalid input');
  }
}

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
  switchDataView('profile');
}
$save.addEventListener('click', saveFunction);
/* $body.addEventListener('DOMContentLoaded', function {

}); */
