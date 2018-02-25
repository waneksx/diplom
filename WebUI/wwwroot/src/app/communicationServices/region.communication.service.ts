import { Injectable, EventEmitter, Output } from '@angular/core';
import { Region } from '../classes/Region';

@Injectable()
export class RegionComunicationService {
    @Output() public onRegionSave = new EventEmitter<Region>();
}