import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../classes/Region';

@Injectable()
export class RegionHttpService {
    private url: any = 'regionList.json';
    constructor(private _http: HttpClient) { }


    public getRegions() {
        return this._http.get(this.url);
    }

    public saveRegion(region:Region) {
        console.log(region + "saved")
    }
}