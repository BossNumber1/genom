// implementation of movement and rotation

dragElement(document.getElementsByClassName("protractor")[0]);

const rotationFunction = new Propeller(
    document.getElementsByClassName("protractor")[0],
    {
        inertia: 0,
    }
);

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document
    .getElementsByClassName("protractor")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "leftEdge" ||
                e.target.className !== "rightEdge") &&
            e.target.className === "imgProtractor"
        ) {
            rotationFunction.stop();

            document.getElementsByClassName("imgProtractor")[0].style.width =
                "300px";
            document.getElementsByClassName("imgProtractor")[0].style.height =
                "300px";

            document.getElementsByClassName("leftEdge")[0].style.height =
                "160px";
            document.getElementsByClassName("leftEdge")[0].style.top = "67px";

            document.getElementsByClassName("rightEdge")[0].style.height =
                "160px";
            document.getElementsByClassName("rightEdge")[0].style.top = "67px";
            document.getElementsByClassName("rightEdge")[0].style.left =
                "82.5%";

            dragElement(document.getElementsByClassName("protractor")[0]);
        }

        if (
            (e.target.className === "leftEdge" ||
                e.target.className === "rightEdge") &&
            e.target.className !== "imgProtractor"
        ) {
            rotationFunction.onRotated(e);
        }
    });

// creating animation for buttons

document
    .getElementsByClassName("protractor")[0]
    .addEventListener("mousedown", (e) => {
        if (e.target.className === "leftEdge") {
            let elem = document.getElementsByClassName("imgProtractor")[0];
            elem.src = "./pictures/protractorLeftSelected.svg";

            document.getElementsByClassName("imgProtractor")[0].style.width =
                "300px";
            document.getElementsByClassName("imgProtractor")[0].style.height =
                "155px";

            document.getElementsByClassName("leftEdge")[0].style.height =
                "155px";
            document.getElementsByClassName("rightEdge")[0].style.height =
                "155px";

            document.getElementsByClassName("imgProtractor")[0].style.top =
                "67px";
        }

        if (e.target.className === "rightEdge") {
            // alert("right!");
        }
    });

// collecting results

let angles = {
    BAC: 0,
    ABC: 0,
    BCA: 0,
};

document.getElementById("BAC").onchange = function (e) {
    if (e.target.value == 65) {
        angles.BAC = "верное";
    } else {
        angles.BAC = "неверное";
    }
};

document.getElementById("ABC").onchange = function (e) {
    if (e.target.value == 90) {
        angles.ABC = "верное";
    } else {
        angles.ABC = "неверное";
    }
};

document.getElementById("BCA").onchange = function (e) {
    if (e.target.value == 50) {
        angles.BCA = "верное";
    } else {
        angles.BCA = "неверное";
    }
};

document.getElementById("submit").onclick = function () {
    alert(
        "Значение угла: BAC - " +
            angles.BAC +
            ", ABC - " +
            angles.ABC +
            ", BCA - " +
            angles.BCA
    );
};
