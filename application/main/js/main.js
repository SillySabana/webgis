// Declare a source for points and drawing
var vectorSource = new ol.source.Vector({
  url:"",
  format: new ol.format.GeoJSON()
});
var vectorSourceDrawing = new ol.source.Vector();

var centerpos = [84.7, 27.2];
var mapExtent = [80.05844110511943, 26.34796713166326, 88.20152186778046, 30.44742959688676];
var newpos = ol.proj.transform(centerpos, 'EPSG:4326', 'EPSG:900913');


// Declare vector layers, one for points and the other for the drawing
var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: pointStyles
});

var vectorLayerDrawing = new ol.layer.Vector({
  source: vectorSourceDrawing
});


/*
var vector_name1 = new ol.layer.Vector({
  source: new ol.source.Vector({
    url:'external\geojson\chitwan.GeoJSON',
    defaultProjection: ' EPSG: 4326',
    projection: 'EPSG: 3857'
  }),
  name :'NAME 1',
    style: style_white()
})
*/
/*var projection = new ol.proj.Projection({
    code: 'EPSG:4326',
    units: 'degrees',
    axisOrientation: 'neu'
});
*/
// Instanciate a map and add layers
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer,
    vectorLayerDrawing
  ],
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),
  controls: ol.control.defaults().extend([
    new ol.control.OverviewMap()
  ]),
  view: new ol.View({
         projection: 'EPSG:900913', //online map
         displayProjection: 'EPSG:4326',
          zoom: 6,
          minZoom: 7,
          maxZoom: 19,
          extent: ol.proj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:900913'),
          center: newpos
        }),
     
});

  /// var geojsonURL = "chitwan.geojson";

// Generate and add random features
      var newfeatures = (new ol.format.GeoJSON()).readFeatures(
        turf.random('point', 50, {
          bbox: ol.proj.transformExtent(map.getView().calculateExtent(map.getSize()), 'EPSG:3857', 'EPSG:4326')
        }), {
          featureProjection: 'EPSG:900913'
        }
      );
      vectorSource.addFeatures(newfeatures);


 /*
      var Newfeatures = (new ol.format.GeoJSON()).readFeatures(
        chitwan.random('point', 50, {
          bbox: ol.proj.transformExtent(map.getView().calculateExtent(map.getSize()), 'EPSG:3857', 'EPSG:4326')
        }),{
          featureProjection : 'EPSG:900913'

        }
        );
      vectorSource.addFeatures(newfeatures);
        
        */