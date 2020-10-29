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
var $createEntry = document.querySelector('.create-entry');

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
  $rowEntries.className = 'rowEntries';
  $entriesContainer.appendChild($rowEntries);

  var $h1Entries = document.createElement('h1');
  $h1Entries.className = 'h1Entries';
  $h1Entries.textContent = 'Entries';
  $rowEntries.appendChild($h1Entries);

  var $newEntryButton = document.createElement('button');
  $newEntryButton.className = 'newEntryButton';
  $rowEntries.appendChild($newEntryButton);

  var $newEntryLink = document.createElement('a');
  $newEntryLink.textContent = 'New';
  $newEntryLink.setAttribute('href', '#');
  $newEntryLink.setAttribute('data-view', 'create-entry');
  $newEntryButton.appendChild($newEntryLink);

  return $entriesContainer;
}

function DOMtreeNewEntry(data) {
  var $newEntryContainer = document.createElement('form');
  $newEntryContainer.className = 'newEntryContainer';

  var $h1NewEntry = document.createElement('h1');
  $h1NewEntry.className = 'h1NewEntry';
  $h1NewEntry.textContent = 'New Entry';
  $newEntryContainer.appendChild($h1NewEntry);

  var $rowCreateEntry = document.createElement('div');
  $rowCreateEntry.className = 'row';
  $newEntryContainer.appendChild($rowCreateEntry);

  var $imageContainerCreateEntry = document.createElement('div');
  $imageContainerCreateEntry.className = 'imageContainer';
  $rowCreateEntry.appendChild($imageContainerCreateEntry);

  var $imageSourceCreateEntry = document.createElement('img');
  $imageSourceCreateEntry.className = 'imageSource';
  $imageSourceCreateEntry.setAttribute('src', 'images/placeholder-image-square.jpg');
  $imageContainerCreateEntry.appendChild($imageSourceCreateEntry);

  var $inputContainerCreateEntry = document.createElement('div');
  $inputContainerCreateEntry.className = 'inputContainer';
  $rowCreateEntry.appendChild($inputContainerCreateEntry);

  var $urlInputCreateEntry = document.createElement('div');
  $urlInputCreateEntry.className = 'avatarURLInput';
  $inputContainerCreateEntry.appendChild($urlInputCreateEntry);

  var $labelContainerCreateEntry = document.createElement('div');
  $labelContainerCreateEntry.className = 'label';
  $urlInputCreateEntry.appendChild($labelContainerCreateEntry);

  var $labelCreateEntry = document.createElement('label');
  $labelCreateEntry.setAttribute('for', 'urlInput');
  $labelCreateEntry.textContent = 'Image URL';
  $labelContainerCreateEntry.appendChild($labelCreateEntry);

  var $inputURLCreateEntry = document.createElement('input');
  $inputURLCreateEntry.setAttribute('type', 'text');
  $inputURLCreateEntry.setAttribute('name', 'urlInput');
  $inputURLCreateEntry.setAttribute('id', 'urlInput');
  $inputURLCreateEntry.setAttribute('required', 'required');
  $urlInputCreateEntry.appendChild($inputURLCreateEntry);

  var $titleInputCreateEntry = document.createElement('div');
  $titleInputCreateEntry.className = 'usernameInput';
  $inputContainerCreateEntry.appendChild($titleInputCreateEntry);

  var $titleLabelContainerCreateEntry = document.createElement('div');
  $titleLabelContainerCreateEntry.className = 'label';
  $titleInputCreateEntry.appendChild($titleLabelContainerCreateEntry);

  var $titleLabelCreateEntry = document.createElement('label');
  $titleLabelCreateEntry.setAttribute('for', 'titleInput');
  $titleLabelCreateEntry.textContent = 'Title';
  $titleLabelContainerCreateEntry.appendChild($titleLabelCreateEntry);

  var $inputTitleCreateEntry = document.createElement('input');
  $inputTitleCreateEntry.setAttribute('type', 'text');
  $inputTitleCreateEntry.setAttribute('name', 'titleInput');
  $inputTitleCreateEntry.setAttribute('id', 'titleInput');
  $inputTitleCreateEntry.setAttribute('required', 'required');
  $titleInputCreateEntry.appendChild($inputTitleCreateEntry);

  var $notesRowCreateEntry = document.createElement('row');
  $notesRowCreateEntry.className = 'row';
  $newEntryContainer.appendChild($notesRowCreateEntry);

  var $notesContainer = document.createElement('div');
  $notesContainer.className = 'bioContainer';
  $notesRowCreateEntry.appendChild($notesContainer);

  var $notesInput = document.createElement('div');
  $notesInput.className = 'bioInput';
  $notesContainer.appendChild($notesInput);

  var $notesLabelContainer = document.createElement('div');
  $notesLabelContainer.className = 'label';
  $notesInput.appendChild($notesLabelContainer);

  var $notesLabel = document.createElement('label');
  $notesLabel.setAttribute('for', 'notes');
  $notesLabel.textContent = 'Notes';
  $notesLabelContainer.appendChild($notesLabel);

  var $notesTextArea = document.createElement('textarea');
  $notesTextArea.className = 'notes';
  $notesTextArea.setAttribute('name', 'notes');
  $notesTextArea.setAttribute('cols', '30');
  $notesTextArea.setAttribute('rows', '10');
  $notesTextArea.setAttribute('required', 'required');
  $notesInput.appendChild($notesTextArea);

  return $newEntryContainer;
}

function switchDataView(dataView) {
  if (dataView === 'edit-profile') {
    $profile.className = 'hidden profile';
    $entries.className = 'hidden entries';
    $createEntry.className = 'hidden create-entry';
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
    $createEntry.className = 'hidden create-entry';
    $entries.className = 'hidden entries';
    $profile.classList.remove('hidden');
    data.view = dataView;
  } else if (dataView === 'entries') {
    $entries.innerHTML = '';
    $entries.appendChild(DOMTreeEntries(data));
    $editProfile.className = 'hidden edit-profile';
    $createEntry.className = 'hidden create-entry';
    $profile.className = 'hidden profile';
    $entries.classList.remove('hidden');
    data.view = dataView;
  } else if (dataView === 'create-entry') {
    $createEntry.innerHTML = '';
    $createEntry.appendChild(DOMtreeNewEntry(data));
    $editProfile.className = 'hidden edit-profile';
    $profile.className = 'hidden profile';
    $entries.className = 'hidden entries';
    $createEntry.classList.remove('hidden');
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
  } else if (event.target.getAttribute('data-view') === 'create-entry') {
    // console.log('success');
    switchDataView('create-entry');
  }
});
