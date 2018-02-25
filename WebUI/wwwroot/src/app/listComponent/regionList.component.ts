import { Component, OnInit } from '@angular/core';
import {RegionHttpService } from './region.http.service'
import { Region } from '../classes/Region';
import { RegionComunicationService } from '../communicationServices/region.communication.service';

@Component({
    selector: 'region-list',
    templateUrl: './region-list.component.html',
    providers: [RegionHttpService]
    // styleUrls: ['./region-list.style.scss'],
})
export class RegionListComponent implements OnInit {

    regions : Region[] = [];
    error:any;
    constructor(private regionHttpService: RegionHttpService,
        private regionComunicationService: RegionComunicationService) {}

    ngOnInit(): void {
        this.regionHttpService.getRegions().subscribe(
            (data: Region[]) => this.regions = data,
            error => { this.error = error.message; console.log(error);});
            this.regionComunicationService.onRegionSave.subscribe((region:Region) => this.regions.unshift(region))
    }
}