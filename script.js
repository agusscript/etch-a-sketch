const containerDivs = document.querySelector(".grid-container");

function createDivs(numOfDivs) {
  let multiplyDivs = numOfDivs * numOfDivs;
  for (let i = 0; i < multiplyDivs; i++) {
    divItem = document.createElement("div");
    divItem.classList.add("div-item");
    containerDivs.appendChild(divItem);
  }
}

function changeDivColor(color) {
  let gridDivs = containerDivs.querySelectorAll("div");

  gridDivs.forEach(target => {
    target.addEventListener("mouseover", function(e) {
      target.style.backgroundColor = color;
    });
  });
}

function clearContainerDivs() {
  containerDivs.innerHTML = "";
  createDivs(16);
  changeDivColor("red");
}

let clearContainerGrid = document.querySelector(".clear-btn");
clearContainerGrid.addEventListener("click", clearContainerDivs);


createDivs(16);
changeDivColor("red");




