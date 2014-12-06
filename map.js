L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiU2U2QnIzUSJ9.4LnG05Ptvi1sUQ8t68rfgw';
var map = L.mapbox.map('map', 'grafa.a44c6bf4', {
	maxZoom: 17,
	zoomControl: false
})
.setView([18.300648960015547,-64.70231652259827], 16);

L.control.zoom({position: 'bottomleft'} ).addTo(map);