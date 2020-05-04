const Expand = {

    expanded: () => {
let title = document.querySelector(".title");
 let subtitle = document.querySelector(".subtitle")
        let pourcentage = document.querySelector(".pourcentage")
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            title.style.fontSize = "1.5em";
            title.style.background = "none";
            subtitle.style.opacity = "1";
            subtitle.classList.add('movimiento');
            document.querySelector("#main").style.opacity = "1";
            document.querySelector("article").style.zIndex ="6";
            pourcentage.style.opacity = "1";

        } else {
            title.style.fontSize = "8em";
            title.style.background = "white";
            document.querySelector("#main").style.opacity = "0";
            subtitle.classList.remove('movimiento');
            pourcentage.style.opacity = "0";
            document.querySelector("article").style.zIndex ="0";
        }

    }
}

export default Expand;


