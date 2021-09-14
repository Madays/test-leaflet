var map = L.map('map', {editable: true}).setView([57.69, 11.9], 12);
//L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png').addTo(map);
// Polygon that shows measurements from the start, agnostic of hover.
var polygon = L.polygon([
        [57.69, 11.89],
        [57.697, 11.88],
        [57.71, 11.89],
        [57.71, 11.91],
        [57.69, 11.91]
    ], { showMeasurements: true })
    .addTo(map);
//polygon.enableEdit();
map.on('editable:vertex:drag editable:vertex:deleted', polygon.updateMeasurements, polygon);



const componentArchitecturePlane = document.getElementById('component-architecture-plane');
const dropZone = document.getElementById('map');
const windowSmall = document.getElementById('window-small');
const windowLarge = document.getElementById('window-large');
const door = document.getElementById('door');

componentArchitecturePlane.addEventListener('dragstart', e => {
   e.dataTransfer.setData('id', e.target.id);
});

dropZone.addEventListener('dragover', e => {
   e.preventDefault();
   e.dataTransfer.dropEffect = "move";
});

dropZone.addEventListener('drop', e => {
   const imagePath = e.dataTransfer.getData('text/plain');
   e.preventDefault()
   coordinates = map.containerPointToLatLng(L.point([e.clientX,e.clientY]))
   L.marker(coordinates, {icon: L.icon({iconUrl: imagePath}),
  	draggable: true}).addTo(map)
});

//For movile touch
windowSmall.addEventListener('touchmove', function(e) {
   // grab the location of touch
   var touchLocation = e.targetTouches[0];  
   //windowSmall chanched position absolute whe fires touch event
   windowSmall.classList.add("touched");
   // assign windowSmall new coordinates based on the touch.
   //windowSmall.style.left = touchLocation.pageX + 'px';
   //windowSmall.style.top = touchLocation.pageY + 'px';

   //
   coordinates = map.containerPointToLatLng(L.point([touchLocation.pageX,touchLocation.pageY]));
   L.marker(coordinates, {icon: L.icon({iconUrl: `window-small.png`,iconSize: [38,95]})}).addTo(map);
})

windowSmall.addEventListener('touchend', function(e) {
   // current box position.
   var x = parseInt(windowSmall.style.left);
   var y = parseInt(windowSmall.style.top);
 })

// target = document.getElementById("map")
// target.ondragover = function (e) {
//  	e.preventDefault()
//   e.dataTransfer.dropEffect = "move"
// }

// target.ondrop = function (e) {
//  	e.preventDefault()
//   imagePath = e.dataTransfer.getData("text/plain")
//   coordinates = map.containerPointToLatLng(L.point([e.clientX,e.clientY]))
//   L.marker(coordinates, {icon: L.icon({iconUrl: imagePath}),
//  	draggable: true}).addTo(map)
// }