var isFinished = true;
var leave = false;
var isMenuOpen = false;
//window.onload = prepareSearch();
var discord;
var partner;
var anmeldung;
var forum;
var diverses;
var downloads;

/* doch nicht benötigt

<input id="indexInput" onmouseover="slideOverlay(true, false)"  onmouseout="leaveTrue(); isFinishedTrue(); slideOverlay(false, false)" onfocusin="slideOverlay(true, false)" onfocusout="leaveTrue(); isFinishedTrue(); slideOverlay(false, false)" placeholder="Text eingeben">
<div id="overlappingDivInput" onmouseover="leaveFalse(); slideOverlay(true, true)" onmouseout="leaveTrue(); isFinishedTrue(); slideOverlay(false, true)" onclick="doSth();">
    <p id="enterText">OK</p>
</div>

function slideOverlay(off, isOverlay) {
    var div = document.getElementById("overlappingDivInput");
    var input = document.getElementById("indexInput");
    var text = document.getElementById("enterText");

    if (off) {
        text.style.opacity = "100%";
        input.style.paddingLeft = "5px";
        input.style.paddingRight = "51px";
        div.style.width = "50px";
        div.style.marginLeft = "150px";
        div.addEventListener("transitionend", function (e) {
            if(e.propertyName === "margin-left") {
                div.style.pointerEvents = "all";
                isFinished = true;
                text.style.opacity = "100%";
            }
        });
    } else {
        if(isFinished) {
            if(leave) {
                text.style.opacity = "0%";
                leave = false;
            }
            isFinished = false;
            input.style.paddingLeft = "31px";
            input.style.paddingRight = "5px",
            div.style.width = "30px";
            div.style.marginLeft = "0px";
            div.addEventListener("transitionend", function (e) {
                if(e.propertyName === "margin-left") {
                    div.style.pointerEvents = "none";
                    isFinished = true;
                    text.style.opacity = "0%";
                }
            });
        }
    }
}*/

function scrollEinleitung () {
    //window.scrollTo(0, window.innerHeight);
    scroll({
        top: window.innerHeight,
        behavior: "smooth"
    })
}

function doSth() {
    prepareSearch();
}

function isFinishedTrue() {
    isFinished = true;
}

function leaveTrue() {
    leave = true;
}
function leaveFalse() {
    leave = false;
}

function toggleMenu() {
    if(isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    var menu = document.getElementById("menu");
    var back = document.getElementById("backgroundMenu");
    //var closeIcon = document.getElementById("closeIcon");
    var img = document.getElementById("menuImg");
    menu.style.transition = "width 0.3s ease-out";
    back.style.transition = "width 0.3s ease-out";

    isMenuOpen = true;

    menu.style.zIndex = 1;
    menu.style.opacity = "100%";
    menu.style.width = "350px";
    back.style.zIndex = 1;
    back.style.opacity = "70%";
    back.style.width = "calc(100% - 350px)"
    img.src = "pictures/menu-close-icon.svg"
    //closeIcon.style.opacity = "100%";
    //closeIcon.style.zIndex = 1;
}

function closeMenu() {
    var menu = document.getElementById("menu");
    var back = document.getElementById("backgroundMenu");
    //var closeIcon = document.getElementById("closeIcon");
    var img = document.getElementById("menuImg");
    menu.style.transition = "width 0.3s ease-in";
    back.style.transition = "width 0.3s ease-in";

    isMenuOpen = false;

    menu.addEventListener("transitionend", makeMenuUnvisible);
    menu.style.width = "0px";
    back.style.zIndex = -1;
    back.style.opacity = "0%";
    back.style.width = "100%";
    img.style.opacity = "0%"
    img.style.pointerEvents = "none";
    //closeIcon.style.opacity = "0%";
    //closeIcon.style.zIndex = -1;
}

function makeMenuUnvisible(e) {
    if(e.propertyName === "width") {
        var menu = document.getElementById("menu");
        var img = document.getElementById("menuImg");
        menu.style.zIndex = -1;
        menu.style.opacity = "0%";
        img.style.opacity = "100%";
        img.src = "pictures/menu-open-icon.svg"
        img.style.pointerEvents = "all";
        menu.removeEventListener("transitionend", makeMenuUnvisible);
    }
}

function moveMenuItemRight(item) {
    item.style.paddingLeft = "25px";
    item.style.background = "#e6e6e6";
}

function moveMenuItemLeft(item) {
    item.style.paddingLeft = "15px";
    item.style.background = "none";
}

function scrolled() {
    var up = document.getElementById("scrollUp");
    if(window.scrollY > 300) {
        up.style.opacity = "100%";
        up.style.pointerEvents = "all";
    } else {
        up.style.opacity = "0%";
        up.style.pointerEvents = "none";
    }
}

/* vielleicht noch benötigt

function prepareSearch() {
    discord = getPage("discord-server.html");
    partner = getPage("partner.html");
    anmeldung = getPage("anmeldung.html");
    forum = getPage("forum.html");
    diverses = getPage("diverses.html");
    downloads = getPage("downloads.html");
}

function getPage(name) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://raw.githubusercontent.com/jaskerx-mcfp/mcfp-website/master/" + name, false);
    xmlHttp.send(null);
    var res = xmlHttp.response;
    var parser = new DOMParser();
    var page = parser.parseFromString(res, "text/html");
    return page;
}*/








// Idee: Fortschrittsanzeige (in abgeteilten Segmenten?)