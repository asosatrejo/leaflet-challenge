// Create URL for GeoJSON
// All earthquakes from the past seven days
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

function createMap(earthquakes){

    // Create the tile layer for background of map
    var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href = "https://www.openstreetmap.org/copywrite">OpenStreetMap</a>contributors'
    });

    // baseMap object to hold streetMap layer
    var baseMap = {
        "Street Map": streetMap
    };

    // overlayMaps object to hold overlays
    var overlayMaps = {
        "Earthquakes": earthquakes
    };

    // Map object with options
    var map = L.map("map", {
        center: [40, -100],
        zoom: 5,
        layers: [streetMap, earthquakes]
    });

    // Layer Control - baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMap, overlayMaps, {
        collapsed: false
    }).addTo(map);
}

function createFeatures(response){
    // GeoJSON Layer ocntainig features array 
    var earthquakes = L.geoJSON(response, {
        pointToLayer: function(feature, location){
            // Create circle
            return new L.circle(location, {
                radius: size(feature.properties.mag),
                fillColor: color(feature.geometry.coordinates[2]),
                fillOpacity: .7,
                color: "red",
                stroke: true,
                weight: 0.5
                
            })
        }, onEachFeature: onFeature
    });
    // Create Map with Circles 
    createMap(earthquakes);
};

// Size of circles based on magnitude
function size(magnitude){
    return magnitude * 30000;
}

// Function to use for each feature in features array
function onFeature(feature, layer){
    //Popup describing time + place of earthquake
    layer.bindPopup("<h3>" + feature.properties.place + "</h3><hr/><p>" + new Date(feature.properties.time) + "</p>");
}

// Color of circles based on depth
function color(depth){
    if(depth > 90){
        return "#C0392B";
    } else if (depth >= 70){
        return "#E74C3C"
    } else if (depth >= 50){
        return "#E67E22"
    } else if (depth >= 30){
        return "#F7DC6F"
    } else if (depth >= 10){
        return "#00FF00"
    } else {
        return "#2ECC71"
    }
}

// Add a legend to the map
/*var legend = L.control({position: 'topright'});

legend.onAdd = function(map){
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += '<i style="background: #2ECC71"></i><span>-10 - 10</span><br>';
    div.innerHTML += '<i style="background: #00FF00"></i><span>10 - 30</span><br>';
    div.innerHTML += '<i style="background: #F7DC6F"></i><span>30 - 50</span><br>';
    div.innerHTML += '<i style="background: #E67E22"></i><span>50 - 70</span><br>';
    div.innerHTML += '<i style="background: #E74C3C"></i><span>70 - 90</span><br>';
    div.innerHTML += '<i style="background: #C0392B"></i><span>90+</span><br>';
    return div;
}

legend.addTo(map);*/


// Perform an API call to get the earthquake information
// Call createFeatures when it completes
d3.json(url).then(function(data){
    createFeatures(data.features);
});