var $avatarURL = document.querySelector('#avatar');
var $username = document.querySelector('#username');
var $fullname = document.querySelector('#fullname');
var $location = document.querySelector('#location');
var $bio = document.querySelector('.bio');
var $form = document.querySelector('form');
var $imageSource = document.querySelector('.imageSource');
var $save = document.querySelector('.button');

var $editProfile = document.querySelector('.edit-profile');
var $profile = document.querySelector('.profile');
var $entries = document.querySelector('.entries');

function DOMtree(object) {
  var $profileContainer = document.createElement('div');
  $profileContainer.className = 'profileContainer';

  var $h1 = document.createElement('h1');
  $h1.className = 'inputName';
  $h1.textContent = object.profile.fullName;
  $profileContainer.appendChild($h1);

  var $row = document.createElement('div');
  $row.className = 'row';
  $profileContainer.appendChild($row);

  var $imageContainer = document.createElement('div');
  $imageContainer.className = 'imageContainer';
  $row.appendChild($imageContainer);

  var $imageSourceProfile = document.createElement('img');
  $imageSourceProfile.className = 'imageSourceProfile';
  $imageSourceProfile.setAttribute('src', object.profile.avatarUrl);
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
  $inputUserName.textContent = object.profile.username;
  $inputProfile.appendChild($inputUserName);

  var $inputProfile2 = document.createElement('div');
  $inputProfile2.className = 'inputProfile';
  $inputContainer.appendChild($inputProfile2);

  var $userLocation = document.createElement('i');
  $userLocation.className = 'fas fa-compass';
  $inputProfile2.appendChild($userLocation);
  var $inputLocation = document.createElement('div');
  $inputLocation.className = 'inputLocation';
  $inputLocation.textContent = object.profile.location;
  $inputProfile2.appendChild($inputLocation);

  var $inputProfile3 = document.createElement('div');
  $inputProfile3.className = 'inputProfile inputBio';
  $inputProfile3.textContent = object.profile.bio;
  $inputContainer.appendChild($inputProfile3);

  var $editProfileButton = document.createElement('button');
  var $editProfileLink = document.createElement('a');
  $editProfileLink.setAttribute('href', '#');
  $editProfileLink.setAttribute('data-view', 'edit-profile');
  $editProfileButton.className = 'editProfileButton';
  $editProfileLink.textContent = 'Edit Profile';
  $editProfileLink.className = 'editProfileLink';
  $editProfileButton.appendChild($editProfileLink);
  $inputContainer.appendChild($editProfileButton);

  return $profileContainer;
}

function DOMTreeEntries(data) {
  var $entriesContainer = document.createElement('div');
  $entriesContainer.className = 'entriesContainer';

  var $rowEntries = document.createElement('div');
  $rowEntries.className = 'row';
  $entriesContainer.appendChild($rowEntries);

  var $h1Entries = document.createElement('h1');
  $h1Entries.className = 'h1Entries';
  $h1Entries.textContent = 'Entries';
  $rowEntries.appendChild($h1Entries);

  return $entriesContainer;
}

function switchDataView(dataView) {
  if (dataView === 'edit-profile') {
    $profile.className = 'hidden profile';
    $entries.className = 'hidden entries';
    $editProfile.classList.remove('hidden');
    $imageSource.setAttribute('src', data.profile.avatarUrl);
    $avatarURL.value = data.profile.avatarUrl;
    $username.value = data.profile.username;
    $fullname.value = data.profile.fullName;
    $location.value = data.profile.location;
    $bio.value = data.profile.bio;
    data.view = dataView;
  } else if (dataView === 'profile') {
    $profile.innerHTML = '';
    $profile.appendChild(DOMtree(data));
    $editProfile.className = 'hidden edit-profile';
    $entries.className = 'hidden entries';
    $profile.classList.remove('hidden');
    data.view = dataView;
  } else if (dataView === 'entries') {
    $entries.innerHTML = '';
    $entries.appendChild(DOMTreeEntries(data));
    $editProfile.className = 'hidden edit-profile';
    $profile.className = 'hidden profile';
    $entries.classList.remove('hidden');
    data.view = dataView;
  }
}

function avatarFunction(event) {
  $imageSource.setAttribute('src', event.target.value);
}
$avatarURL.addEventListener('blur', avatarFunction);

function saveFunction(event) {
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
document.addEventListener('DOMContentLoaded', function () {
  if (data.profile.username === '') {
    switchDataView('edit-profile');
  } else {
    switchDataView(data.view);
  }
});

document.addEventListener('click', function () {
  if (event.target.tagName !== 'A') {
    return;
  }
  if (event.target.getAttribute('data-view') === 'edit-profile') {
    switchDataView('edit-profile');
  } else if (event.target.getAttribute('data-view') === 'profile' && data.profile.username !== '') {
    switchDataView('profile');
  } else if (event.target.getAttribute('data-view') === 'entries' && data.profile.username !== '') {
    switchDataView('entries');
  }
});
