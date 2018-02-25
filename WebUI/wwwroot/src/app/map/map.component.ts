import { AfterViewInit, Component, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { MapService } from './map.service';
import { Region } from '../classes/Region';
import { RegionComunicationService } from '../communicationServices/region.communication.service';
import { RegionHttpService } from '../listComponent/region.http.service';

@Component({
    selector: 'map-component',
    templateUrl: './map.component.html',
    styleUrls: ['./map.style.scss'],
    providers: [ MapService, RegionHttpService ]
})
export class MapComponent {
    @ViewChild("mapElement") mapElement: ElementRef;
    constructor(private mapService: MapService,
        private regionHttpService: RegionHttpService,
        private regionComunicationService: RegionComunicationService) {}

    saveRegion() {
        var region = new Region();
        region.name = "test";
        region.polygon = this.mapService.getDrawnFeature();
        this.regionHttpService.saveRegion(region);
        this.regionComunicationService.onRegionSave.emit(region);
    }
    drawRegion() {
        this.mapService.drawRegion();
    }

    ngAfterViewInit() {
        this.mapService.map.setTarget(this.mapElement.nativeElement.id);
    }
}