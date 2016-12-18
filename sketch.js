var rows, cols;
var w = 40;
var grid = [];

function setup() {
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;

    this.show = function show() {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        noFill();
        rect(x, y, w, w);
    }
}
