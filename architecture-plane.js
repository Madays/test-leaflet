//defined map and blueprint of home
var map = L.map('map').setView([-10.406105052399276,-147.5690460205078], 2);

var myGeoJson = {
   "type":"FeatureCollection",
   "features":[
       {
           "type":"Feature",
           "geometry":{
               "type":"LineString",
               "coordinates":[
                   [-93.825,-32.14287395],
                   [-88.425,-27.65861979],
                   [-82.575,-32.52310201],
                   [-98.55,-45.08903556],
                   [-110.475,-35.87195906],
                   [-116.55,-39.95286955],
                   [-122.625,-35.68942551],
                   [-112.48014706,-27.28872711],
                   [-100.35,-37.31705287],
                   [-93.825,-32.14287395]
               ]
           },
           "id":"7ef56a8a-1d0d-4bb8-80f0-0f6fe129a32f",
           "properties":{"name":"Master bedroom"}
       },
       {
           "type":"Feature",
           "geometry":{
               "type":"LineString",
               "coordinates":[
                   [-116.55,-39.95286955],
                   [-103.05,-48.47699995],
                   [-98.55,-45.08903556],
                   [-110.475,-35.87195906],
                   [-116.55,-39.95286955]
               ]
           },
           "id":"cbc5f7d6-911c-4d3d-96be-375d75d2156b",
           "properties":{"name":"bathroom"}
       },
       {
           "type":"Feature",
           "geometry":{
               "type":"LineString",
               "coordinates":[
                   [-123.975,-7.40430457],
                   [-134.55,-18.35285714],
                   [-123.075,-27.45914939],
                   [-128.25,-31.95216224],
                   [-122.625,-35.68942551],
                   [-106.2,-21.73419274],
                   [-113.72701166,-15.6126139],
                   [-123.75,-7.18112483]
               ]
           },
           "id":"d3ac16e3-f43e-462b-87b7-17002a86c9f5",
           "properties":{"name":"windows1"}
       },
       {
           "type":"Feature",
           "geometry":{
               "type":"LineString",
               "coordinates":[
                   [-106.2,-21.73419274],
                   [-101.22192445,-26.03625324],
                   [-93.825,-32.14287395],
                   [-100.35,-37.31705287],
                   [-112.48014706,-27.28872711],
                   [-106.2,-21.73419274]
               ]
           },
           "id":"bc444aa9-c227-4c92-ad50-da358813f7c1",
           "properties":{"name":"windows2"}
       }
   ]
};

var geojson = L.geoJson(myGeoJson).addTo(map);
//defined drag and drop element
const windowSmall = document.getElementById('window-small');
const dropZone = document.getElementById('map');

//drag event
windowSmall.addEventListener('dragstart', e => {
   e.dataTransfer.setData('id', e.target.id);
});

dropZone.addEventListener('dragover', e => {
   e.preventDefault();
   e.dataTransfer.dropEffect = "move";
});
//End drag event

//drop event
dropZone.addEventListener('drop', e => {   
   const imagePath = e.dataTransfer.getData('text/plain');
   e.preventDefault();

   coordinates = map.containerPointToLatLng(L.point([e.clientX -20 ,e.clientY - 65]));
   L.marker(coordinates, {icon: L.icon({iconUrl: imagePath}),
  	draggable: true}).addTo(map);
});

//use event touch for drag windows in mobile devices
windowSmall.addEventListener('touchend', function(e) {
   
   // grab the location of touch
   var touchLocation = e.changedTouches[0];
   console.log(touchLocation);
   coordinates = map.containerPointToLatLng(L.point([touchLocation.pageX - 20 ,touchLocation.pageY - 65]));
   L.marker(coordinates, {icon: L.icon({iconUrl: "window-small.png"}),
  	draggable: true}).addTo(map);
 })
