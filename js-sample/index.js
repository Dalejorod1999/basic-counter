let developer = {
  name: '{Developer Name}',
  languages: ['Spanish', 'English'],
  programmingLanguages: ['HTML', 'CSS', 'JavaScript']
};

function showLanguages() {
  let listOfLanguages = document.getElementById('languages');
  developer.languages.map((obj) => {
    let listItem = document.createElement('li');
    listItem.innerText = obj;
    listOfLanguages.appendChild(listItem);
  });
}

function showProgrammingLanguages() {
  let listOfProgrammingLanguages = document.getElementById('programmingLanguages');
  for (let i = 0; i < developer.programmingLanguages.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = developer.programmingLanguages[i];
    listOfProgrammingLanguages.appendChild(listItem);
  }
}

showLanguages();
showProgrammingLanguages();

document.getElementById('developer').innerText = developer.name;
