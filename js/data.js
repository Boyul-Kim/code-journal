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

var previousDataJson = localStorage.getItem('codeJournalData');
if (previousDataJson !== null) {
  data = JSON.parse(previousDataJson);
}

function dataStorage(event) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('codeJournalData', dataJson);
}

window.addEventListener('beforeunload', dataStorage);
