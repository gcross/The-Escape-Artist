usable_object_ids = [
    "box",
    "square",
    "circle",
];

function initialize() {
    this.fill_box = false;
    this.draw_circle = true;
    this.draw_square = true;
}

function draw() {
    object_ids = ["box"];
    if(this.fill_box) object_ids.push("box_contents");
    if(this.draw_square) object_ids.push("square");
    if(this.draw_circle) object_ids.push("circle");
    drawObjects(object_ids);
}

function clicked(id) {
    switch(id) {
        case "box": this.fill_box = !this.fill_box; break;
        case "square": this.draw_circle = !this.draw_circle; break;
        case "circle": this.draw_square = !this.draw_square; break; 
    }
    this.draw();
    this.save();
}
