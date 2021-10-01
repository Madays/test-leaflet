//defined map and blueprint of home
var map = L.map('map').setView([-13.325484885597936,-71.7626953125], 8);

//var point1 = map.containerPointToLatLng(L.point(200, 300)).addTo(map);
//get tiles from https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.circle([-13.325484885597936,-71.7626953125], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: .5
}).addTo(map).bindPopup("I am a circle");

L.polygon([
    [-13.154376055418515, -71.89453125],
    [-13.496472765758952, -72.39990234375],
    [-13.774066408054814, -71.89453125],
    [-13.496472765758952, -71.56494140625],
    [-13.154376055418515, -71.89453125]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: .5
}).addTo(map).bindPopup("I am a poligon.");

var popup = L.popup();

function onMapClick(e){
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at "+e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

var greenIcon = L.icon({
    iconUrl: 'window-small.png',
    iconSize: [32, 37],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var popup = L.popup({
    maxWidth: 400
}).setLatLng([-13.154376055418515, -71.89453125])
.setContent('<img src="http://via.placeholder.com/350x150"/>')
.openOn(map);
L.marker([-13.154376055418515, -71.89453125],{icon: greenIcon}).addTo(map).bindPopup(popup);

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