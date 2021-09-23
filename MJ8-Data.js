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
           "properties":{"name":"Livingroom"}
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
           "properties":{"name":"Maday's room"}
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
           "properties":{"name":"Master bedroom"}
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
           "properties":{"name":"Bathroom"}
       }
   ]
};

//MJ8 data for window
const mj8DataWindow = 
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

//define marker of windows
L.marker([-26.03625324, -101.22192445], {icon: L.icon({iconUrl: "window-small.png"})}).addTo(map).bindPopup(mj8DataWindow);
L.marker([-7.40430457, -123.975], {icon: L.icon({iconUrl: "window-small.png"})}).addTo(map).bindPopup(mj8DataWindow);

//Adding Interaction
function highlightFeature(e){
   var layer = e.target;

   layer.setStyle({
       weight: 8,
       color: '#FF9500',
       dashArray:'',
       fillOpacity: 0.7
   });

   if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge){
       layer.bringToFront();
   }

   info.update(layer.feature.properties);
}

function resetHighlight(e) {
   geojson.resetStyle(e.target);
   info.update();
}

function onEachFeature(feature, layer){
   layer.on({
       mouseover: highlightFeature,
       mouseout: resetHighlight
   });            
}

// Custom Info Control

var info = L.control();

info.onAdd = function(map){
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Room: ' +  (props ? props.name : 'Hover over the room') + '</h4>';
};

info.addTo(map);


var geojson = L.geoJson(myGeoJson, {
   onEachFeature: onEachFeature
}).addTo(map);