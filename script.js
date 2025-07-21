function handleGridSize(gridSize){

    let gridSizeSquare = gridSize * gridSize;

    for(let i = 0 ; gridSizeSquare > i ; i++ ){
        const div = document.createElement("div");
      const container = document.getElementById("container");
      container.appendChild(div);
      container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`


    }
   
}




document.addEventListener("DOMContentLoaded" , function exec() {

    let gridSize = prompt("Tell me the size of grid you want (not more than 20)");

        
    if( gridSize > 20 || gridSize <= 0){
        alert("Please enter correct size !!");
        exec();

    }else{
        handleGridSize(gridSize);
    }

})



;

