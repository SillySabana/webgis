var URL = "http://localhost:8080/geoserver/internproject/wms";
var osmMap = new ol.layer.Tile({
	source: new ol.source.OSM(),
	visible: true,
	isBaseLayer: true
});
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


var line = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:Feeder_Line'}
			//crossOrigin:'Anonymous'
		})
	),
	name:'Analysis Data',
	isBaseLayer:false,
	visible:true
});
var pole = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:Electricity_Pole_PT'}
			//crossOrigin:'Anonymous'
		})
	),
	name:'Analysis Data',
	isBaseLayer:false,
	visible:true
});
var LTline = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:LT_Lines'}
			//crossOrigin:'Anonymous'
		})
	),
	name:'Analysis Data',
	isBaseLayer:false,
	visible:true
});
var transformer = new ol.layer.Tile({
	source:new ol.source.TileWMS(
		({
			url:URL,
			serverType:'geoserver',
			params:{'LAYERS':'internproject:Transformer_PT'}
			//crossOrigin:'Anonymous'
		})
	),
	name:'Analysis Data',
	isBaseLayer:false,
	visible:true
});