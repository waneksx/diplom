import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegionHttpService {
    private url: any = 'regionList.json';
    constructor(private _http: HttpClient) { }


    public getRegions() {
        return this._http.get(this.url);
    }
}