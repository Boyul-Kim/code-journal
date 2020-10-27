/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

var previousEntriesJson = localStorage.getItem('javascript-local-storage');
if (previousEntriesJson !== null) {
  data.entries = JSON.parse(previousEntriesJson);
}

function dataStorage(event) {
  var entriesJson = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', entriesJson);
}

window.addEventListener('beforeunload', dataStorage);
