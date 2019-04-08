// Mouvements des carrés
$(document).ready(function () {


// var s = skrollr.init();


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

  var md = window.markdownit()
    .use(markdownitFootnote)
    .use(markdownitContainer),
    warning;


  $.get("Thesis.md", function (data) {
    $('#content').html(md.render(data));

    setTimeout(function () {
      putNotes(".footnote-item")
      var elements = document.getElementsByClassName("footnote-ref");
    for (var i = 0; i < elements.length; ++i) {
      elements[i].innerHTML = elements[i].innerHTML.replace('[',' ').replace(']','');
    }
    }, 200);


    //lazyload
    // $("img").each(function () {

    //   $(this).attr("data-src", $(this).attr("src"));
    //   $(this).removeAttr("src");
    //   //lazyload
    // $("img").addClass("lozad")


    // lozad('.lozad', {
    //   load: function (el) {
    //     el.src = el.dataset.src;
    //     el.onload = function () {
    //       el.classList.add('fade')
    //     }
    //   }
    // }).observe()
    
    // });
  });

});


function putNotes(footerClassName) {
    const noteContainer = document.querySelector(".r-notes-container");
    noteContainer.style.opacity = 0;
    noteContainer.style.transition = "opacity 1000ms ease-in-out";
    noteContainer.innerHTML = "";

    const footerNotesElements = document.querySelectorAll(footerClassName);

    // const container = document.querySelectorAll("h1");

    // var p = $( "h1:first" );
    // var position = p.position();
    // $( "h1:last" ).text( "left: " + position.left + ", top: " + position.top );
    // var title = $('h1');
    // console.log(title);

    // $(window).scroll(function () {
    //   title.each(function (index) {

    //     console.log(title[index].getBoundingClientRect().y);
    //     //console.log($(title[index]).offset().top);

    //   });
    // });

    //       $( "h1" ).each(function( index ) {
    //   console.log( index + ": " + $( this ).text() );
    // });



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
        first = false;
        const noteNumberValueElement = document.createElement("span");
        noteNumberValueElement.innerText = num + " ";
        noteNumberValueElement.className = "footnote-counter";
        copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);
        let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        if (topPosition <= prevFootnoteBottomPosition) {
          topPosition = prevFootnoteBottomPosition + 56;
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
    //porcetange
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




  // $(document).ready(function() {
  //    //   var x = $("p");
  //    // console.log(x);
  //
  //   var container = document.querySelectorAll("h1");
  //   console.log(container);
  //
  //   //    var x = $("h1").position.length();
  //   // console.log(x);
  //   //
  //   // var y = document.querySelectorAll("h1");
  //   // console.log(y);
  //
  //
  //   });