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


const mj8DataWindow = document.getElementById('mj8-data-window');
const dropZone = document.getElementById('map');
const windowSmall = document.getElementById('window-small');
const windowLarge = document.getElementById('window-large');
const door = document.getElementById('door');

windowSmall.addEventListener('dragstart', e => {
   e.dataTransfer.setData('id', e.target.id);
});

dropZone.addEventListener('dragover', e => {
   e.preventDefault();
   e.dataTransfer.dropEffect = "move";
});

dropZone.addEventListener('drop', e => {
   const imagePath = e.dataTransfer.getData('text/plain');
   e.preventDefault();

   coordinates = map.containerPointToLatLng(L.point([e.clientX -20 ,e.clientY - 65]))
   L.marker(coordinates, {icon: L.icon({iconUrl: imagePath}),
  	draggable: true}).addTo(map);
});

windowSmall.addEventListener('touchend', function(e) {
   // grab the location of touch
   var touchLocation = e.changedTouches[0];
   
   coordinates = map.containerPointToLatLng(L.point([touchLocation.pageX - 20 ,touchLocation.pageY - 65]));
   L.marker(coordinates, {icon: L.icon({iconUrl: "window-small.png"}),
  	draggable: true}).addTo(map);
 })
