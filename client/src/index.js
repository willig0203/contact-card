import "./js/index.js";
import "./css/index.css";

import { initdb, getDb, postDb } from "./js/database";

import { fetchCards } from "./js/card";

import { toggleForm, clearForm } from "./js/form";

import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./images/logo.png";
import Bear from "./images/bear.png";
import Dog from "./images/dog.png";

window.addEventListener("load", function () {
  initdb();
  fetchCards();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});
