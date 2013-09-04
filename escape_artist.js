var svg_namespace = "http://www.w3.org/2000/svg"
var xlink_namespace = "http://www.w3.org/1999/xlink"

function startup() {
    // set onclick on all objects
    for(var i = 0; i < usable_object_ids.length; ++i) {
        var id = usable_object_ids[i];
        var node = document.getElementById(id);
        node.setAttribute("onclick","object_id_clicked = '" + id + "';");
    }
    // initalize the state
    function State() { }
    State.prototype = {"initialize":initialize,"clicked":clicked,"draw":draw};
    state = new State();
    // fetch the stage node
    stage = document.getElementById("__stage__");
}

function delegateClick() {
    if(typeof object_id_clicked != 'undefined') {
        // These first two lines ensure that the clicked object id is reset
        // even if an error occurs.
        var object_id = object_id_clicked;
        delete object_id_clicked;
        state.clicked(object_id);
    }
}

function drawObjects(object_ids) {
    while(stage.lastChild !== null) stage.removeChild(stage.lastChild);
    for(var i = 0; i < object_ids) {
        var use_node = document.createElementNS(svg_namespace,"use");
        node.setAttributeNS(xlink_namespace,"href","#"+this.id);
        stage.appendChild(node);
    }
}