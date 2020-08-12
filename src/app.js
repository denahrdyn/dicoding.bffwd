import 'bootstrap';
import "regenerator-runtime";
import "./scss/style.scss";

// main section
import "./script/component/nav-bar.js";
import webpackJumbo from './assets/img_jumbo.jpg';
import main from './script/view/main.js';

document.querySelector('#imgJumbo').src = webpackJumbo;
document.addEventListener("DOMContentLoaded", main);