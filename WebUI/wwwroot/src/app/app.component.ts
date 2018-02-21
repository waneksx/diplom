import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { OnInit } from '@angular/core';
import * as ol  from 'openlayers';
import * as $  from 'jquery';
import * as materialize from "materialize-css";
const elem = document.getElementById('menu-button')!;

@Component({
    selector: 'my-app',
                //  <mangol></mangol>`,
                templateUrl: './app.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit { 
    ngOnInit(): void {
        var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([37.41, 8.82]),
                zoom: 4
            })
        });
    }
    name= '';
}