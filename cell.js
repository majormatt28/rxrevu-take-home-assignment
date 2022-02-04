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

function countActiveCell(grid, centerCell) {
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const thisCoordinate = [i, j];
            const isCenterCell = areTheSame(centerCell, thisCoordinate );
            const isNeighbor = areNeighbors(centerCell, thisCoordinate);
            const isActive = isCellActive(cell); 
            if (!isCenterCell && isNeighbor && isActive) {
                counter++;
            }
        }
    }
    return counter;
}

function areTheSame(a,b) {
    return a[0] === b[0] && a[1] === b[1];  
}

function areNeighbors(c,d) {
    const distVer = Math.abs(c[0] - d[0]);
    const distHor = Math.abs(c[1] - d[1]);
    return distVer <= 1 && distHor <= 1;
}

function isCellActive(e) {
    return e === "x";
}

console.log("The answer should be: ",countActiveCell(grid1, [0,0]));
console.log("The answer should be: ",countActiveCell(grid2, [0,0]));
console.log("The answer should be: ",countActiveCell(grid3, [0,0]));
console.log("The answer should be: ",countActiveCell(grid4, [0,0]));
