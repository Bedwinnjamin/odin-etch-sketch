let rainbow = false;
let size = 16;

buildGrid(size);

document.querySelector("#rainbowBtn").addEventListener("click", event => {
  if(rainbow)
    rainbow = false;
  else
    rainbow = true;
});

document.querySelector("#clearBtn").addEventListener("click", event => {
  //gridItems.forEach(item => {
  //  item.classList.remove("drawn");
  //});
  size = prompt("Enter a new grid size less than 100", "16");

  if(size > 0 && size <= 100)
    buildGrid(size);
});


function buildGrid(size){
  const container = document.querySelector(".container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const gridDiv = document.createElement('div');
  gridDiv.classList.add("sketchGrid");
  gridDiv.style.height = "500px";
  gridDiv.style.width = "500px";
  gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size*size; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add("gridItem");
    //gridItem.style.borderStyle = "solid";
    gridDiv.append(gridItem);
  }
  container.append(gridDiv);
  createItems();
}

function createItems(){
  const gridItems = document.querySelectorAll(".gridItem");

  gridItems.forEach(item => {
    item.addEventListener("mouseover", event => {
      if(rainbow) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.backgroundColor = `#${randomColor}`;
      }
      else
        item.classList.add("drawn");
    })
  });
}