function calculateNumbers(var1,var2){
    return var1 + var2;
}

// write a draggable component
// HTML
<div id="draggable" draggable="true" ondragstart="drag(event)">Drag me!</div>
<div id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

// JavaScript
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  }

  function allowDrop(event) {
    event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
        var data = event.dataTransfer.getData("text");
          document.getElementById("dropzone").appendChild(document.getElementById(data));