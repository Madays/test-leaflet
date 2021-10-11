map = new L.Map('map', {center: new L.LatLng(-109.05, 37), zoom: 1 });

// add Leaflet-Geoman controls with some options to the map  
map.pm.addControls({  
    position: 'topleft',  
    drawCircle: false,  
});  

map.pm.addControls({
    positions: {
      draw: 'topright',
      edit: 'topleft',
    },
});

var MyCustomMarker = L.Icon.extend({
    options: {
        shadowUrl: null,
        iconAnchor: new L.Point(12, 12),
        iconSize: new L.Point(24, 10),
        iconUrl: 'window-large.png'
    }
});
    
  