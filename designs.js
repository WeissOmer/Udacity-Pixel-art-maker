var sizePicker = document.querySelector("#sizePicker"); 
var colorPicker = document.querySelector("#colorPicker");
var grid = document.querySelector("#pixelCanvas");
var gridHeight = document.querySelector("#inputHeight");
var gridWidth = document.querySelector("#inputWidth");

//The event that trigger the make grid function and clears the previous grid if there is one
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    let checkRow = grid.rows.length;
    if (checkRow > 0) {
        grid.innerHTML ="";
    }
    makeGrid(gridHeight, gridWidth)
})
    
//The makegrid function, creating a new grid based on height and width the user set in the size picker.
function makeGrid(gridHeight, gridWidth) {
     gridHeight = gridHeight.value;
     gridWidth = gridWidth.value;
    for (let  x= 0; x < gridHeight; x++) {
        let  row = grid.insertRow(x); 
        for (let  y = 0; y < gridWidth; y++) {
            let  cell = row.insertCell(y);
             //Clicking on a cell changing the cell background color based on the value in the color picker
             cell.addEventListener("click", function(event) {
                event.preventDefault();
                let color = colorPicker.value;
                let td = event.target;
                td.style.backgroundColor = color
            } 
        )}
    }
}

