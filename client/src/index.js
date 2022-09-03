import "./js/index.js";
import "./css/index.css";

import { initdb, getDb, postDb, deleteDb } from "./js/database";

import { fetchCards } from "./js/card";

import { toggleForm, clearForm } from "./js/form";

import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./images/logo.png";
import Bear from "./images/bear.png";
import Dog from "./images/dog.png";
import Unused from "./images/unused-image.png";

const installBtn = document.getElementById(‘installBtn’);

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
    });
  });

  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
  });

if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

window.addEventListener("load", function () {
  initdb();

  fetchCards();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

// didn't get this in the lesson
// not final code yet
window.addCard = (e) => {
  // We are temporarily placing getDb() and postDb() function
  // calls here for testing. We will move it to another event listener later.
  getDb();
  postDb("Gary", "gary@test.com", 8186601234, "Bear");
  getDb();
};

window.deleteCard = (e) => {
  // Grabs the id from the button element attached to the contact card.
  let id = parseInt(e.id);
  // Delete the card
  deleteDb(id);
  // Reload the DOM
  fetchCards();
};

window.editCard = (e) => {
  // Grabs the id from the button element attached to the
  // contact card and sets a global variable that will be
  // used in the form element.
  profileId = parseInt(e.dataset.id);

  // Grabs information to pre-populate edit form
  let editName = e.dataset.name;
  let editEmail = e.dataset.email;
  let editPhone = e.dataset.phone;

  document.getElementById("name").value = editName;
  document.getElementById("email").value = editEmail;
  document.getElementById("phone").value = editPhone;

  form.style.display = "block";

  // Toggles the Submit button so that it now Updates an
  // existing contact instead of posting a new one
  submitBtnToUpdate = true;
};
