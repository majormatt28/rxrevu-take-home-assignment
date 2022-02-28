let grid1 = [ [" ", " ", " "], 
              [" ", "x", " "], 
              [" ", " ", " "] ];

let grid2 = [ ["x", "x", " "], 
              [" ", "x", " "], 
              [" ", " ", " "] ];

let grid3 = [ ["x", "x", "x"], 
              [" ", "x", " "], 
              [" ", "x", " "] ]; 

let grid4 = [ ["x", "x", "x"], 
              [" ", "x", " "], 
              [" ", " ", " "] ];



function computeNext(grid) {
    let newGrid = grid.map(elem => []);

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let numActiveCells = countActiveCell(grid, [i, j]);
            let cell = row[j];
            let isActive = isCellActive(cell);
            if (isActive && numActiveCells < 2) {
                cell = " ";
            } 
            if (isActive && (numActiveCells === 2 || numActiveCells === 3)) {
                cell = "x";
            }
            if (isActive && numActiveCells > 3) {
                cell = " ";
            }
            if (!isActive && numActiveCells === 3) {
                cell = "x";
            }
            newGrid[i][j] = cell;
        }
    }
    return newGrid;
}

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

// refactored code

// function countActiveCell(grid, centerCell) {
//     let counter = 0;
//     for (let i = 0; i < grid.length; i++) {
//         const row = grid[i];
//         counter = innerRow(centerCell, counter, row, i);
//     }
//     return counter;
// }

// function innerRow(centerCell, counter, row, i) {
//     let c = counter;
//     for (let j = 0; j < row.length; j++) {
//         const cell = row[j];
//         const thisCoordinate = [i, j];
//         const distVer = Math.abs(centerCell[0] - thisCoordinate[0]);
//         const distHor = Math.abs(centerCell[1] - thisCoordinate[1]);
//         const isCenterCell = centerCell[0] === thisCoordinate[0] && centerCell[1] === thisCoordinate[1];
//         const isNeighbor = distVer <= 1 && distHor <= 1;
//         const isActive = cell === "x"; 
//         if (!isCenterCell && isNeighbor && isActive) {
//             c++;
//         }
//     } 
//     return c;
// }

console.log("The answer should be: ",computeNext(grid1));
console.log("The answer should be: ",computeNext(grid2));
console.log("The answer should be: ",computeNext(grid3));
console.log("The answer should be: ",computeNext(grid4));
