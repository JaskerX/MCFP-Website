function slideOverlay(off) {
    var div = document.getElementById("overlappingDivInput");
    div.style.transition = "width 0.3s ease 0s";
    if (off) {
        div.style.width = "0px";
    } else {
        div.style.width = "200px";
    }
}