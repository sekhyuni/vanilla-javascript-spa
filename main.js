import App from "./src/app";
import "./index.css";

window.addEventListener('DOMContentLoaded', function (event) {
    new App(document.querySelector('#root'));
});