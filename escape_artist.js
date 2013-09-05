var svg_namespace = "http://www.w3.org/2000/svg"
var xlink_namespace = "http://www.w3.org/1999/xlink"

function startup() {
    // set onclick on all objects
    for(var i = 0; i < usable_object_ids.length; ++i) {
        var id = usable_object_ids[i];
        var node = document.getElementById(id);
        node.setAttribute("onclick","object_id_clicked = '" + id + "';");
    }
    // fetch the stage node
    stage = document.getElementById("__stage__");
    // initalize the state
    function State() { }
    State.prototype = {
        "initialize":initialize,
        "clicked":clicked,
        "draw":draw,
        "load":function () {
            var data = JSON.parse(localStorage.state);
            for (name in data) this[name] = data[name];
        },
        "save":function () { localStorage.state = JSON.stringify(this); }
    };
    state = new State();
    state.initialize();
    state.load();
    state.draw();
}

function delegateClick() {
    if(typeof object_id_clicked != 'undefined') {
        // These first two lines ensure that the clicked object id is reset
        // even if an error occurs.
        var object_id = object_id_clicked;
        delete object_id_clicked;
        state.clicked(object_id);
    }
    document.cookie = "x=test";
}

function drawObjects(object_ids) {
    while(stage.lastChild !== null) stage.removeChild(stage.lastChild);
    for(var i = 0; i < object_ids.length; ++i) {
        var node = document.createElementNS(svg_namespace,"use");
        node.setAttributeNS(xlink_namespace,"href","#"+object_ids[i]);
        stage.appendChild(node);
    }
}