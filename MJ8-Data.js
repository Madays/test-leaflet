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

const windowModal = 
'<form action="">'+
   '<div class="nkn-row-padding">'+                       
         '<div class="nkn-col-s12">'+
            '<label class="nkn-label">Windows construction</label>'+
         '</div>'+
         '<div class="nkn-col-s12">'+
            '<select class="nkn-select">'+
            '</select>'+
         '</div>'+
   '</div>'+
   '<div class="nkn-row-padding">'+                        
         '<div class="nkn-col-s12">'+
            '<label class="nkn-label">Insect screen</label>'+
         '</div>'+
         '<div class="nkn-col-s12">'+
            '<select class="nkn-select">'+
            '</select>'+
         '</div>'+
   '</div>'+
   '<div class="nkn-row-padding">'+                      
         '<div class="nkn-col-s12">'+
            '<label class="nkn-label">Internal shade</label>'+
         '</div>'+
         '<div class="nkn-col-s12">'+
            '<select class="nkn-select">'+
            '</select>'+
         '</div>'+
   '</div>'+
   '<div class="nkn-row-padding">'+                      
         '<div class="nkn-col-s12">'+
            '<label class="nkn-label">External sun screen</label>'+
         '</div>'+
         '<div class="nkn-col-s12">'+
            '<select class="nkn-select">'+
            '</select>'+
         '</div>'+
   '</div>'+
'</form>';

coordinates = [57.70349, 11.88074];
L.marker(coordinates, {icon: L.icon({iconUrl: "window-small.png"})}).addTo(map).bindPopup(windowModal);

function highlightFeature(e){
   var layer = e.target;

   layer.setStyle({
       weight: 5,
       color: '#fff',
       dashArray:'',
       fillOpacity: 0.7
   });

   if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge){
       layer.bringToFront();
   }
}

function resetHighlight(e) {
   geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer){
   layer.on({
       mouseover: highlightFeature,
       mouseout: resetHighlight
   });            
}