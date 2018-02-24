import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService } from './map.service';

@Component({
    selector: 'map-component',
    templateUrl: './map.component.html',
    styleUrls: ['./map.style.scss'],
    providers: [ MapService ]
})
export class MapComponent {
    @ViewChild("mapElement") mapElement: ElementRef;
    constructor(private mapService: MapService) {}

    drawRegion() {
        this.mapService.draw();
    }

    ngAfterViewInit() {
        this.mapService.map.setTarget(this.mapElement.nativeElement.id);
        this.drawRegion();
    }
}