const MarkdownHtml = {

    Parse: () => {
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

                var elements = document.getElementsByClassName("footnote-ref");
                for (var i = 0; i < elements.length; ++i) {
                    elements[i].innerHTML = elements[i].innerHTML.replace('[', ' ').replace(']', '');
                }
            }, 500);


        })

    },
    PlaceNotes: (footerClassName) => {

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
            const numElementInTextID = "#fnref" + num;
            const numElement = document.querySelector(numElementInTextID);
            footerElement.style.display = "none";
            copyOfFooterElement.style.display = "block";
            if (numElement instanceof HTMLElement) {
                const noteElementToAdd = noteContainer.appendChild(copyOfFooterElement);
                const noteNumberValueElement = document.createElement("span");
                const marginTopNote = 10; //px unit
                const test = noteElementToAdd.querySelector("a");
                let topPosition = numElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
                noteNumberValueElement.innerText = num + " ";
                noteNumberValueElement.className = "footnote-counter";
                copyOfFooterElement.insertBefore(noteNumberValueElement, copyOfFooterElement.firstChild);
                if (topPosition - marginTopNote <= prevFootnoteBottomPosition) {
                    topPosition = prevFootnoteBottomPosition + marginTopNote;
                }
                noteElementToAdd.className = "footnote";
                noteElementToAdd.style.position = "absolute";
                noteElementToAdd.style.top = topPosition + "px";
                prevFootnoteBottomPosition = noteElementToAdd.getBoundingClientRect().height + topPosition;
                test.id = footerID;

            }
        }
        noteContainer.style.opacity = 1;

    }


}

export default MarkdownHtml;
