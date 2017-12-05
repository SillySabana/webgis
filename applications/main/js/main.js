var centerpos = [85.7, 27.6];
var mapExtent = [80.05844110511943, 26.34796713166326, 88.20152186778046, 30.44742959688676];
var newpos = ol.proj.transform(centerpos, 'EPSG:4326', 'EPSG:900913');
      var raster = new ol.layer.Tile({
        source: new ol.source.OSM()
      });

      var source = new ol.source.Vector({wrapX: false});

      var vector = new ol.layer.Vector({
        source: source
      });


      var map = new ol.Map({
        layers: [raster,nepal],
        target: 'map',
        interactions: ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom(), ]),

	       controls: ol.control.defaults().extend([new ol.control.OverviewMap() ]),

        view: new ol.View({
         projection: 'EPSG:900913', //online map
  		   displayProjection: 'EPSG:4326',
      		zoom: 10,
      		minZoom: 10,
      		maxZoom: 19,
      		extent: ol.proj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:900913'),
      		center: newpos
              }),
     
      });
