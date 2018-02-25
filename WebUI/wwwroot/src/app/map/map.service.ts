let ol: any = require('openlayers/dist/ol-debug')

export class MapService {
    private _tile = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    private _drawableFeaturesSource = new ol.source.Vector();
    private _drawableFeaturesLayer = new ol.layer.Vector({
        source: this._drawableFeaturesSource
    });
    private _editableFeaturesSource = new ol.source.Vector();
    private _editableFeaturesLayer = new ol.layer.Vector({
        source: this._editableFeaturesSource
    });
    private _snapInteraction = new ol.interaction.Snap({ source: this._drawableFeaturesSource });
    private _drawInteraction = new ol.interaction.Draw({
        type: "Polygon", source: this._drawableFeaturesSource
    });
    private _map: any;

    constructor() {
        this._map = new ol.Map({
            layers: [
                this._tile,
                this._drawableFeaturesLayer,
                this._editableFeaturesLayer
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([37.41, 8.82]),
                zoom: 4
            })
        });
        this.setupDrawEvents();
        this.modify();
    }

    public get map() {
        return this._map;
    }

    private setupDrawEvents() {
        this._drawInteraction.on('drawend',  (e:any) => {
            this._editableFeaturesSource.addFeature(e.feature);
            this._drawableFeaturesSource.clear();
        });
    };

    drawRegion() {
        this._drawableFeaturesSource.clear();
        this._editableFeaturesSource.clear();
        this._map.addInteraction(this._snapInteraction)
        this._map.addInteraction(this._drawInteraction)
    }

    modify(){
        var modify = new ol.interaction.Modify({source: this._editableFeaturesSource});
        this._map.addInteraction(modify);
    }

    getDrawnFeature(){
        var features = <Array<any>>this._editableFeaturesSource.getFeatures();
        return features[0];
    }


}