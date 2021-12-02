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
        // document.getElementsByClassName("protractor")[0].style.transform =
        //     "scale(2)";
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
                "250px";
            document.getElementsByClassName("rightEdge")[0].style.height =
                "250px";

            dragElement(document.getElementsByClassName("protractor")[0]);
        }

        if (
            (e.target.className === "leftEdge" ||
                e.target.className === "rightEdge") &&
            e.target.className !== "imgProtractor"
        ) {
            // document.getElementsByClassName("protractor")[0].style.transform =
            //     "scale(2)";
            rotationFunction.onRotated(e);
        }
    });

// document.getElementsByClassName("protractor")[0].onclick = function () {
//     alert("exc");
// };
