function buildGrid(){
  const container = document.querySelector(".containter");

  const gridDiv = document.createElement('div');
  gridDiv.setAttribute.gridTemplateColumns = "repeat(16, 1fr)";

  for(let i = 0; i < 16*16; i++){
    const gridItem = document.createElement('div');
    gridDiv.append(gridItem);
  }
  container.append(gridDiv);
}

buildGrid()