var URL = "http://localhost:8080/geoserver/internproject/wms";
var osmMap = new ol.layer.Tile({
	source: new ol.source.OSM(),
	 // projection: new OpenLayers.Projection("EPSG:900913"),
	visible: true,
	isBaseLayer: true
})

var nepal = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:Nepal'}
			//crossOrigin:'Anonymous'
		})
	),
	name:'Nepal Boundary',
	isBaseLayer:false,
	visible:true
});
var chitwan = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'chitwan.geojson',
       // projection: new OpenLayers.Projection('EPSG:900913', 'EPSG:4326'),
        format: new ol.format.GeoJSON()
    })
});


var dang = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:Dang'},
			//crossOrigin:'Anonymous'
		})
	),
	name:'Dang Arsenic Data',
	isBaseLayer:false,
	visible:true
});

var developmentregions = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:DevelopmentRegions'},
			//crossOrigin:'Anonymous'
		})
	),
	name:'DevelopmentRegions Boundary',
	isBaseLayer:false,
	visible:true
});

var district = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:Districts'}
			//crossOrigin:'Anonymous'
		})
	),
	name:'Districts Boundary',
	isBaseLayer:false,
	visible:true
});