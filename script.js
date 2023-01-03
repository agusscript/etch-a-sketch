const containerDivs = document.querySelector("#grid-container");
let divItem;

function createGridContainer() {
  containerDivs.style.display = "grid";
  containerDivs.style.width = "500px";
  containerDivs.style.height = "500px";
}

function createGrid(numOfDivs) {
  containerDivs.style.gridTemplateColumns = `repeat(${numOfDivs}, auto)`;
  let multiplyDivs = numOfDivs * numOfDivs;
  for (let i = 0; i < multiplyDivs; i++) {
    divItem = document.createElement("div");
    divItem.classList.add("div-item");
    containerDivs.appendChild(divItem);
  }
}

function changeDivColor(color) {
  let gridDivs = containerDivs.querySelectorAll("div");

  gridDivs.forEach((target) => {
    target.addEventListener("mouseover", function (e) {
      target.style.backgroundColor = color;
    });
  });
}

function randomRgb() {
  let randomNum = Math.floor(Math.random() * 255);
  return randomNum;
}

function randomColor() {
  let gridDivs = containerDivs.querySelectorAll("div");

  gridDivs.forEach((target) => {
    target.addEventListener("mouseover", function (e) {
      target.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
    });
  });
}

function clearGrid() {
  containerDivs.replaceChildren(divItem, divItem);
}

function clearContainerDivs() {
  let gridDivs = containerDivs.querySelectorAll("div");

  gridDivs.forEach((target) => {
    target.style.backgroundColor = "white";
  });
}

let clearContainerGridButton = document.querySelector(".clear-btn");
clearContainerGridButton.addEventListener("click", clearContainerDivs);

let raibowColorDivButton = document.querySelector(".rainbow-btn");
raibowColorDivButton.addEventListener("click", randomColor);

function showGrid() {
  createGridContainer();
  createGrid(16);
  changeDivColor("black");
}

showGrid();
