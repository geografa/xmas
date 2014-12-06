L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiU2U2QnIzUSJ9.4LnG05Ptvi1sUQ8t68rfgw';
var map = L.mapbox.map('map', 'grafa.a44c6bf4', {
	maxZoom: 17,
	zoomControl: false
})
.setView([18.300648960015547,-64.70231652259827], 16);

L.control.zoom({position: 'bottomleft'} ).addTo(map);

var geoJson = {
    features: [{
        type: 'Feature',
        properties: {
            title: 'Ram\'s Head',
	        // one can customize markers by adding simplestyle properties
	        // https://www.mapbox.com/foundations/an-open-platform/#simplestyle
	        'marker-size': 'large',
	        'marker-color': '#f30',
	        'marker-symbol': 'heart',
            // youtube
            video: '<iframe width="361" src="//www.youtube.com/embed/KgWLgctv5vk" frameborder="0" allowfullscreen></iframe>',
        },
        geometry: {
            type: 'Point',
                    coordinates: [-64.702627658844, 18.299385867585286]
        }
    }]
};

var myLayer = L.mapbox.featureLayer().addTo(map);

// Add the iframe in a marker tooltip using the custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content from the GeoJSON property 'video'
    var popupContent =  feature.properties.video;

    // bind the popup to the marker http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 380
    });
});

// Add features to the map
myLayer.setGeoJSON(geoJson);
