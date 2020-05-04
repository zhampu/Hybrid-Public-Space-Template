import 'markdown-it'
import 'markdown-it-container'
import 'markdown-it-footnote'
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import '../scss/_main.scss'
import {espaceFine} from "./espacefine.min";
import Animations from './animations'
import MarkdownHtml from "./markdown-html";
import porcentage from "./porcentage";
import Expand from "./expand-scroll";

window.addEventListener('DOMContentLoaded', (event) => {

    Animations.shapes();
    MarkdownHtml.Parse();
    setTimeout(MarkdownHtml.PlaceNotes(".footnote-item"), 500);
    document.querySelector(".title").style.fontSize = "8em";
    espaceFine;
});

window.onscroll = function () {
    Expand.expanded();
    porcentage.counter();
    MarkdownHtml.PlaceNotes(".footnote-item")

};
window.addEventListener("resize", function () {
    MarkdownHtml.PlaceNotes(".footnote-item")

});


