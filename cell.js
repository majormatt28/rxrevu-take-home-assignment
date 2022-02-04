let grid1 = [ [" ", " ", " "], 
              [" ", "x", " "], 
              [" ", " ", " "] ];

let grid2 = [ ["x", "x", " "], 
              [" ", "x", " "], 
              [" ", " ", " "] ];

let grid3 = [ ["x", "x", "x"], 
              [" ", "x", " "], 
              [" ", " ", " "] ]; 

let grid4 = [ ["x", "x", "x"], 
              [" ", " ", " "], 
              [" ", "x", " "] ];

function findActiveCell(grid) {
    let counter = 0;
    for (let j = 0; j < grid.length; j++) {
        let row = grid[j]; 
    for (let i = 0; i < row.length; i++) {
            if(row[i] === "x") {
                counter++;
            }
        }
    }   
    if (grid[1][1] === "x") {
        counter -= 1;
    }
    console.log("The answer should be: ", counter);
}
findActiveCell(grid1);
findActiveCell(grid2);
findActiveCell(grid3);
findActiveCell(grid4);
// console.log("output: ",grid1);
// console.log("output: ",grid2);
// console.log("output: ",grid3);
// console.log("output: ",grid4);