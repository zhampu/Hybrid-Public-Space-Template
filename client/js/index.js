import $ from 'jquery'
import 'markdown-it'
import 'markdown-it-container'
import 'markdown-it-footnote'
import '../scss/_main.scss'
import {espaceFine} from "./espacefine.min";

// Take the Markdown File and passes it to HTML

$(document).ready(function () {


    document.querySelector(".title").style.fontSize = "8em";
    espaceFine();

    var circulo = document.getElementById("circulo");
    setInterval(function () {

        circulo.setAttribute("r", getRandomInt(5, 30));
    }, 4000);

    var circle = document.getElementById("circle");
    setInterval(function () {
        circle.setAttribute("width", getRandomInt(15, 30));
        circle.setAttribute("height", getRandomInt(25, 30));
    }, 4000);

    var circle2 = document.getElementById("circle2");
    setInterval(function () {
        circle2.setAttribute("width", getRandomInt(5, 40));
        circle2.setAttribute("height", getRandomInt(5, 30));
    }, 4000);

    var circle3 = document.getElementById("circle3");
    setInterval(function () {
        circle3.setAttribute("width", getRandomInt(5, 40));
        circle3.setAttribute("height", getRandomInt(5, 30));
    }, 4000);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function requestInterval(fn, delay) {
        var requestAnimFrame = (function () {
                return window.requestAnimationFrame || function (callback, element) {
                    window.setTimeout(callback, 1000 / 60);
                };
            })(),
            start = new Date().getTime(),
            handle = {};

        function loop() {
            handle.value = requestAnimFrame(loop);
            var current = new Date().getTime(),
                delta = current - start;
            if (delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }
        }

        handle.value = requestAnimFrame(loop);
        return handle;
    };

    var md = require('markdown-it')().use(require('markdown-it-container')).use(require('markdown-it-footnote'));
    $.get("Thesis.md", function (data) {
        $('#content').html(md.render(data));
        setTimeout(function () {
            var list = $('#main');
            $(".content-article h1").each(function () {
                $(this).prepend('<a id="' + $(this).text() + '"></a>');
                $(list).append('<li><a href="#' + $(this).text() + '">' + $(this).text() + '</a></li>');

                const firstA = document.querySelector("ul > li > a");
                firstA.classList.add("active");
            });
            putNotes(".footnote-item")
            var elements = document.getElementsByClassName("footnote-ref");
            for (var i = 0; i < elements.length; ++i) {
                elements[i].innerHTML = elements[i].innerHTML.replace('[', ' ').replace(']', '');
            }
        }, 500);


    })


});


// var li = $('#main:first li:first a:first');
// console.log(li);
function putNotes(footerClassName) {
    const noteContainer = document.querySelector(".notes-images");
    const footerNotesElements = document.querySelectorAll(footerClassName);
    let prevFootnoteBottomPosition = 0;


    noteContainer.style.opacity = 0;
    noteContainer.style.transition = "opacity 2000ms ease-in-out";
    noteContainer.innerHTML = "";


    for (const footerElement of footerNotesElements) {

        const copyOfFooterElement = footerElement.cloneNode(true);
        const footerID = copyOfFooterElement.id;
        const num = footerID.substring(2);
        // console.log(footerID);
        // console.log(num);
        const numElementInTextID = "#fnref" + num;
        // console.log(numElementInTextID);
        const numElement = document.querySelector(numElementInTextID);
        // console.log(numElement);
        footerElement.style.display = "none";
        copyOfFooterElement.style.display = "block";


        if (numElement instanceof HTMLElement) {
            const noteElementToAdd = noteContainer.appendChild(copyOfFooterElement);

            const noteNumberValueElement = document.createElement("span");
            // console.log(noteNumberValueElement);
            noteNumberValueElement.innerText = num + " ";
            noteNumberValueElement.className = "footnote-counter";
            copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);
            let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            const marginTopNote = 10; //px unit

            if (topPosition - marginTopNote <= prevFootnoteBottomPosition) {
                topPosition = prevFootnoteBottomPosition + marginTopNote;
            }
            noteElementToAdd.className = "footnote";
            noteElementToAdd.style.position = "absolute";
            noteElementToAdd.style.top = topPosition + "px";
            prevFootnoteBottomPosition = noteElementToAdd.getBoundingClientRect().height + topPosition;
            // console.log(noteElementToAdd);
          var test =  noteElementToAdd.querySelector("a");
            test.id = footerID;

        }
    }
    noteContainer.style.opacity = 1;
}

window.addEventListener("resize", function () {
    putNotes(".footnote-item");

});
$(function () {
    $(window).scroll(function () {
        var hauteur = $(document).height() - $(window).height();
        var pourcentage = (100 * $(window).scrollTop()) / hauteur;

        $(".pourcentage-number").html(Math.round(pourcentage));
    });
    if ($("html").hasClass("mobile")) {
        var windowWidth = $(window).width();
    }
});


window.onscroll = function () {
    titleExpand()
    menuExpand()
    pourcentageExpand()
};



function titleExpand() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".title").style.fontSize = "1.5em";


    } else {
        document.querySelector(".title").style.fontSize = "8em";

    }
}

function menuExpand() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {


        document.querySelector("#main").style.opacity = "1";
    } else {

        document.querySelector("#main").style.opacity = "0";
    }
}

function pourcentageExpand() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {


        document.querySelector(".pourcentage").style.opacity = "1";
    } else {

        document.querySelector(".pourcentage").style.opacity = "0";
    }
}




const x = document.getElementById('main');

document.getElementById('open-menu').onclick = function () {




        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }





    }



function myFunction(x) {
    if (xy.matches) { // If media query matches
        const mainmenu = document.getElementById('main');
        mainmenu.style.display = "none";
    }
}

var xy = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
xy.addListener(myFunction) // Attach listener function on state changes
