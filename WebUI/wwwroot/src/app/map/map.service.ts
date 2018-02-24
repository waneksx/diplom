let ol: any = require('openlayers/dist/ol-debug')

export class MapService {
    private _tile = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    private _featuresSource = new ol.source.Vector();
    private _featuresLayer = new ol.layer.Vector({
        source: this._featuresSource
    });
    private _snapInteraction = new ol.interaction.Snap({ source: this._featuresSource });
    private _drawInteraction = new ol.interaction.Draw({
        type: "Polygon", source: this._featuresSource
    });
    private _map: any;

    constructor() {
        this._map = new ol.Map({
            layers: [
                this._tile,
                this._featuresLayer
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([37.41, 8.82]),
                zoom: 4
            })
        });

        this.modify();
    }

    public get map() {
        return this._map;
    }

    draw() {
        this._map.addInteraction(this._snapInteraction)
        this._map.addInteraction(this._drawInteraction)
    }

    modify(){
        var modify = new ol.interaction.Modify({source: this._featuresSource});
        this._map.addInteraction(modify);
    }
}