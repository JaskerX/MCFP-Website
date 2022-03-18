var isFinished = true;

function slideOverlay(off, isOverlay) {
    var div = document.getElementById("overlappingDivInput");
    var input = document.getElementById("indexInput");
    var text = document.getElementById("enterText");

    if (off) {
        if(isOverlay) {
            text.style.opacity = "100%";
        }
        //input.style.width = "144px";
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
            text.style.opacity = "0%";
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
}

function doSth() {
    
}

function isFinishedTrue() {
    isFinished = true;
}
