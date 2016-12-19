var rows, cols;
var w = 40;
var grid = [];
var current; //current cell

function setup() {
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            var cell = new Cell(x, y);
            grid.push(cell);
        }
    }

    current = grid[0];
    frameRate(4);
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    //Recursive backtracker - Step 1
    current.visited = true;
    current.highlight();
    var next = current.checkNeighbors();
    if (next) {
        next.visited = true;

        //Recursive backtracker - Step 2.1.2
        removeWalls(current, next);
        current = next;
    }
}

//Formula to get the cell in the grid
function index(i, j) {
    //Checking the edge cases (cells with 3 neighbors)
    if (!(i < 0 || j < 0 || i > cols - 1 || j > rows - 1)) {
        return i + j * cols;
    } else {
        return -1;
    }
}
