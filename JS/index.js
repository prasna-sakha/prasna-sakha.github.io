
window.addEventListener('scroll', () => {
    console.log('Scrolled')
})

// responsive navbar on scroll starts//
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.transition = "300ms 800ms";
        document.getElementById("navbar-2").style.top = "-60px";
        document.getElementById("navbar-2").style.filter = "blur(5px)";
        document.getElementById("navbar-2").style.opacity = "0";
    } else {
        document.getElementById("navbar").style.top = "";
        document.getElementById("navbar").style.transition = "300ms";
        document.getElementById("navbar-2").style.top = "";
        document.getElementById("navbar-2").style.filter = "blur(0px)";
        document.getElementById("navbar-2").style.opacity = "1";
    }
}
// responsive navbar on scroll ends //



var small = window.matchMedia("(max-width: 768px)")
function openNav() {
    if (small.matches) {
        document.getElementById("side-nav").style.width = "100%";
        document.getElementById("links").style.opacity = "1";
        document.getElementById("links").style.transition = "1s .5s";
        document.getElementById("fol-log").style.opacity = "1";
        document.getElementById("fol-log").style.transition = "1s .5s";
    } else {
        document.getElementById("side-nav").style.width = "25%";
        document.getElementById("links").style.opacity = "1";
        document.getElementById("links").style.transition = "1s .5s";
        document.getElementById("fol-log").style.opacity = "1";
        document.getElementById("fol-log").style.transition = "1s .5s";
    }

}

function closeNav() {
    if (small.matches) {
        document.getElementById("side-nav").style.width = "";
        document.getElementById("links").style.opacity = "";
        document.getElementById("links").style.transition = ".5s";
        document.getElementById("fol-log").style.opacity = "";
        document.getElementById("fol-log").style.transition = ".5s";

    } else {
        document.getElementById("side-nav").style.width = "";
        document.getElementById("links").style.opacity = "";
        document.getElementById("links").style.transition = ".5s";
        document.getElementById("fol-log").style.opacity = "";
        document.getElementById("fol-log").style.transition = ".5s";
    }
}

function openOverlay() {
    if (small.matches) {
        document.getElementById("search-overlay").style.zIndex = "2";
        document.getElementById("search-overlay").style.opacity = "1";
    } else {
        document.getElementById("search-overlay").style.zIndex = "2";
        document.getElementById("search-overlay").style.opacity = "1";
    }
}
function closeOverlay() {
    if (small.matches) {
        document.getElementById("search-overlay").style.zIndex = "";
        document.getElementById("search-overlay").style.opacity = "";
    } else {
        document.getElementById("search-overlay").style.zIndex = "";
        document.getElementById("search-overlay").style.opacity = "";
    }
}

// for slide resep

var slideCounter = 0;
var left = document.getElementById("swipeLeft");
var right = document.getElementById("swipeRight");
var slide1 = document.getElementById("resep-baru1");
var slide2 = document.getElementById("resep-baru2");
var slide3 = document.getElementById("resep-baru3");
var slide4 = document.getElementById("resep-baru4");
var slide5 = document.getElementById("resep-baru5");
// var allslide = [slide1, slide2, slide3, slide4, slide5];

var test = document.getElementsByClassName("resep-baru");

var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var dot5 = document.getElementById("dot5");

// var slideValue = 0;

// function swipeLeft() {
//     (slideValue.style.left += 100) + "%";

//     if (slideValue.style.left >= 0) {
//         left.style.display = "none";
//     } else {
//         left.style.display = "block";
//     }
//     alert("kurang jadi " + slideValue);
// }

if (slideCounter == 0) {
    dot1.style.backgroundColor = "rgba(0, 0, 0, 1)";
    dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
    dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
    dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
    dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
}

function swipeLeft() {
    slideCounter -= 1;

    if (slideCounter == 0) {
        slide1.style.left = "0%";
        slide2.style.left = "0%";
        slide3.style.left = "0%";
        slide4.style.left = "0%";
        slide5.style.left = "0%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter == 1) {
        slide1.style.left = "-100%";
        slide2.style.left = "-100%";
        slide3.style.left = "-100%";
        slide4.style.left = "-100%";
        slide5.style.left = "-100%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter == 2) {
        slide1.style.left = "-200%";
        slide2.style.left = "-200%";
        slide3.style.left = "-200%";
        slide4.style.left = "-200%";
        slide5.style.left = "-200%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter == 3) {
        slide1.style.left = "-300%";
        slide2.style.left = "-300%";
        slide3.style.left = "-300%";
        slide4.style.left = "-300%";
        slide5.style.left = "-300%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter < 0) {
        slideCounter = 0;
    }

    // alert(slideCounter);
}

function swipeRight() {
    slideCounter += 1;

    if (slideCounter == 1) {
        slide1.style.left = "-100%";
        slide2.style.left = "-100%";
        slide3.style.left = "-100%";
        slide4.style.left = "-100%";
        slide5.style.left = "-100%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter == 2) {
        slide1.style.left = "-200%";
        slide2.style.left = "-200%";
        slide3.style.left = "-200%";
        slide4.style.left = "-200%";
        slide5.style.left = "-200%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter == 3) {
        slide1.style.left = "-300%";
        slide2.style.left = "-300%";
        slide3.style.left = "-300%";
        slide4.style.left = "-300%";
        slide5.style.left = "-300%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, 1)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, .2)";
    } else if (slideCounter == 4) {
        slide1.style.left = "-400%";
        slide2.style.left = "-400%";
        slide3.style.left = "-400%";
        slide4.style.left = "-400%";
        slide5.style.left = "-400%";
        dot1.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot2.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot3.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot4.style.backgroundColor = "rgba(0, 0, 0, .2)";
        dot5.style.backgroundColor = "rgba(0, 0, 0, 1)";
    } else if (slideCounter > 4) {
        slideCounter = 4;
    }

    // alert(slideCounter);
}
// for slide resep

// slide dot starts
// var dot1 = document.getElementById("dot1");
// var dot2 = document.getElementById("dot2");
// var dot3 = document.getElementById("dot3");
// var dot4 = document.getElementById("dot4");
// var dot5 = document.getElementById("dot5");

// slide dot ends
