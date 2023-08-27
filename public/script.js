// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    const scrollTop = this.window.pageXOffset ||
        this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour à toutes et à toutes, je me présente je m'appelle Niavo", "Après une carrière m'ayant fait decouvrir plusieurs milieux professionnels et exercer plus de 15 métiers différents. j'ai décidé de me lancer à fond dans l'apprentissage du code, depuis preès de 6 mois je me forme à temps plein  en  autodidacte aux languages Front tels que CSS, Javascript et son framework React afin  devenir le plus rapidement possible développeur. Plus qu' un avenir proffessionel, je me suis découvert une passion, celle de coder"],
    typeSpeed: 20,

});

// COMPTEUR LIVE
let compteur = 0; 
