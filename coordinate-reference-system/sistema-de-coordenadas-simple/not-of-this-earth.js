var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0,0], [1000,1000]];
map.fitBounds(bounds);
map.setView([70, 120], 1);

var yx = L.latLng;

var xy = function(x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
};

var sol      = xy(0, 0);
var mizar    = xy( 200, 0);
var kruegerZ = xy( 200,100);
var deneb    = xy(0,200);

// var travel = L.polyline([sol, mizar]).addTo(map);
// var travel = L.polyline([mizar, kruegerZ]).addTo(map);
// var travel = L.polyline([kruegerZ, deneb]).addTo(map);
// var travel = L.polyline([deneb, sol]).addTo(map);

//our house
var a      = xy(0, 0);
var b    = xy( 50, 0);
var c = xy( 50,150);
var d    = xy(0,150);
// var e = xy(20,120);
// var f = xy(0,120);

var travel = L.polyline([a, b]).addTo(map);
var travel = L.polyline([b, c]).addTo(map);
var travel = L.polyline([c, d]).addTo(map);
var travel = L.polyline([d, a]).addTo(map);
// var travel = L.polyline([d, e]).addTo(map);
// var travel = L.polyline([e, f]).addTo(map);