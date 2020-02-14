import $ from 'jquery';
import 'markdown-it';
import 'markdown-it-container';
import 'markdown-it-footnote';
// Mouvements des carrés
import './scss/_main.scss'

$(document).ready(function () {

    var circulo = document.querySelector("#circulo");
    setInterval(function () {
        // circulo.setAttribute("cx", getRandomInt(5, 40));
        // circulo.setAttribute("cy", getRandomInt(5, 30));
        circulo.setAttribute("r", getRandomInt(5, 30));
    }, 4000);

    var circle = document.querySelector("#circle");
    setInterval(function () {
        circle.setAttribute("width", getRandomInt(15, 30));
        circle.setAttribute("height", getRandomInt(25, 30));
    }, 4000);

    var circle2 = document.querySelector("#circle2");
    setInterval(function () {
        circle2.setAttribute("width", getRandomInt(5, 40));
        circle2.setAttribute("height", getRandomInt(5, 30));
    }, 4000);

    var circle3 = document.querySelector("#circle3");
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
});
// Take the Markdown File and passes it to HTML

$(document).ready(function () {

    var md = require('markdown-it')().use(require('markdown-it-container')).use(require('markdown-it-footnote'));
    $.get("Thesis.md", function (data) {
        $('#content').html(md.render(data));
        setTimeout(function () {
            var list = $('#sidebar ul');
            $(".content-article h1").each(function () {
                $(this).prepend('<a name="' + $(this).text() + '"></a>');
                $(list).append('<li><a href="#' + $(this).text() + '">' + $(this).text() + '</a></li>');
            });
            putNotes(".footnote-item")
            var elements = document.getElementsByClassName("footnote-ref");
            for (var i = 0; i < elements.length; ++i) {
                elements[i].innerHTML = elements[i].innerHTML.replace('[', ' ').replace(']', '');
            }
        }, 500);
    })
});

function putNotes(footerClassName) {
    const noteContainer = document.querySelector(".r-notes-container");
    noteContainer.style.opacity = 0;
    noteContainer.style.transition = "opacity 2000ms ease-in-out";
    noteContainer.innerHTML = "";
    const footerNotesElements = document.querySelectorAll(footerClassName);
    let prevFootnoteBottomPosition = 0;
    for (const footerElement of footerNotesElements) {
        footerElement.style.display = "none";
        const copyOfFooterElement = footerElement.cloneNode(true);
        copyOfFooterElement.style.display = "block";
        const footerID = copyOfFooterElement.id;
        const num = footerID.substring(2);
        const numElementInTextID = "#fnref" + num;
        const numElement = document.querySelector(numElementInTextID);
        if (numElement instanceof HTMLElement) {
            const noteElementToAdd = noteContainer.appendChild(copyOfFooterElement);
            let first = false;
            const noteNumberValueElement = document.createElement("span");
            noteNumberValueElement.innerText = num + " ";
            noteNumberValueElement.className = "footnote-counter";
            copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);
            let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            // console.log("body top", document.body.getBoundingClientRect().top)
            // console.log("body numElement", numElement.getBoundingClientRect().top)
            const marginTopNote = 20; //px unit

            if (topPosition - marginTopNote <= prevFootnoteBottomPosition) {
                topPosition = prevFootnoteBottomPosition + marginTopNote;
            }
            noteElementToAdd.className = "font-small footnote";
            noteElementToAdd.style.position = "absolute";
            noteElementToAdd.style.top = topPosition + "px";
            prevFootnoteBottomPosition = noteElementToAdd.getBoundingClientRect().height + topPosition;
        }
    }
    noteContainer.style.opacity = 1;
}

window.addEventListener("resize", function () {
    putNotes(".footnote-item");

});
$(function () {
    //porcentage
    $(window).scroll(function () {
        var hauteur = $(document).height() - $(window).height();
        var pourcentage = (100 * $(window).scrollTop()) / hauteur;
        $(".dizaine").css("opacity", 1);
        $(".compteur_pourcentage").html(Math.round(pourcentage));
    });
    if ($("html").hasClass("mobile")) {
        var windowWidth = $(window).width();
    }
});




 