//Agrega el mapa de Open
let map = L.map('map').setView([9.8637, -83.9092],10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 29,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Agrega las opciones de busqueda
document.getElementById('select').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})


//Muestra informacion
function popup(feature,Capas){
    if(feature.properties && feature.properties){
        Capas.bindPopup(feature.properties.name);
    }
}


//Agrega las calles
L.geoJson(poligonos).addTo(map);

var poligonosJS = L.geoJson(poligonos,{
    onEachFeature: popup
}).addTo(map);

L.geoJson(calles).addTo(map);

var callesJS = L.geoJson(calles,{
    onEachFeature: popup
}).addTo(map);

//Agrega las casas
L.geoJson(casas).addTo(map);

var casaJS = L.geoJson(casas, {
    onEachFeature: popup
}).addTo(map);

L.geoJson(lineas).addTo(map);

var lineasJS = L.geoJson(lineas,{
    onEachFeature: popup
}).addTo(map);

L.geoJson(parque).addTo(map);

var parqueJS = L.geoJson(parque,{
    onEachFeature: popup
}).addTo(map);


L.geoJson(puntos).addTo(map);

var puntosJS = L.geoJson(puntos,{
    onEachFeature: popup
}).addTo(map);

L.geoJson(postes).addTo(map);

var postesJS = L.geoJson(postes,{
    onEachFeature: popup
})