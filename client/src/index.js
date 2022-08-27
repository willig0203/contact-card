import "./js/index.js";
import "./css/index.css";

import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./images/logo02.jpeg";
import Bear from "./images/bear.png";
import Dog from "./images/dog.png";

window.addEventListener("load", function () {
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});
