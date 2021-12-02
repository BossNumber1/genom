let newObjectBeingCreated;

document.getElementById("protractorLeftSelected").onclick = function () {
    newObjectBeingCreated = "";

    newObjectBeingCreated = document.createElement("img");
    newObjectBeingCreated.src = "./pictures/protractorLeftSelected.svg";
    newObjectBeingCreated.alt = "protractorLeftSelected";

    document.getElementById("puzzle").innerHTML = "";
    document.getElementById("puzzle").appendChild(newObjectBeingCreated);
};

document.getElementById("displacementSelected").onclick = function () {
    newObjectBeingCreated = "";

    newObjectBeingCreated = document.createElement("img");
    newObjectBeingCreated.src = "./pictures/displacementSelected.svg";
    newObjectBeingCreated.alt = "displacementSelected";

    document.getElementById("puzzle").innerHTML = "";
    document.getElementById("puzzle").appendChild(newObjectBeingCreated);
};

document.getElementById("protractorRightSelected").onclick = function () {
    newObjectBeingCreated = "";

    newObjectBeingCreated = document.createElement("img");
    newObjectBeingCreated.src = "./pictures/protractorRightSelected.svg";
    newObjectBeingCreated.alt = "protractorRightSelected";

    document.getElementById("puzzle").innerHTML = "";
    document.getElementById("puzzle").appendChild(newObjectBeingCreated);
};

document.getElementById("protractorBtn").onclick = function () {
    newObjectBeingCreated = "";

    newObjectBeingCreated = document.createElement("img");
    newObjectBeingCreated.src = "./pictures/protractor.svg";
    newObjectBeingCreated.alt = "protractor";

    document.getElementById("puzzle").innerHTML = "";
    document.getElementById("puzzle").appendChild(newObjectBeingCreated);
};

// class={
//                         isShowPrimordial ? "protractorPrimordial" : "protractor"
//                     }

//----------------------------------------

// isShowPrimordial
// <img src="./pictures/protractor.svg" alt="protractorPrimordial" />;

//  <img src="./pictures/protractor.svg" alt="protractorMini" />;

//--------------------------------------------

// document.getElementById("protractor").onmousedown = mouseDownHandler();
// localStorage.setItem("showWithPartLeft", true);
// localStorage.setItem("showWithDisplacementSelected", true);
// localStorage.setItem("showWithPartRight", true);
// localStorage.setItem("isShowPrimordial", true);
// localStorage.setItem("mini", true);
