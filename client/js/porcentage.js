const porcentage = {

    counter: () => {
        let hauteur = $(document).height() - window.innerWidth
        let pourcentage = (100 * window.pageYOffset) / hauteur;
$(".pourcentage-number").html(Math.round(pourcentage));
    }

}

export default porcentage;
