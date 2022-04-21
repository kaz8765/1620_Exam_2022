// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here


'use strict';
// List of notes
// const notesList = [{
//         title: "first note",
//         noteBody: "this is an example note",
//         id: 1
//     }]

// Target area to store note in
// const noteList = document.querySelector('.container')
// noteList.innerHTML = '<div class="display"></div>'

// Define text area
// const textArea = `
// <textarea id="note" name="story" rows="5" cols="33" enabled>
// </textarea>

// <div class="options">
// <button class="a">save</button>
// <button class="b">cancel</button>
// </div>

// `

// Target + sign
const loadCards = document.querySelector('#display_all_contacts')

function loadContacts(contactsList){
  for (const index in contactsList){
    loadCards.insertAdjacentHTML('afterbegin', contactsList[index].name+contactsList[index].phone+contactsList[index].image+contactsList[index].email+contactsList[index].ID+'\n')

  }

}

loadContacts(contactsList)





// // Target area to write note in
// const noteWriteArea = document.querySelector('.write-note-area')



// function test(evt){
//   console.log(evt)
// }
// Function to display textArea in correct area and target new DOM objects




    // Target new DOM objects the cancel and save button
    // const cancelButton = document.querySelector('.b')
    // const saveButton = document.querySelector('.a')

    // cancelButton.addEventListener('click', removeNote)
    // saveButton.addEventListener('click', createNote)
    // saveButton.addEventListener('click', removeNote)


// Ensure clicking plus sign does not create duplicate text areas hence once:true

// plusSign.addEventListener('click', displayNote, {once: true});