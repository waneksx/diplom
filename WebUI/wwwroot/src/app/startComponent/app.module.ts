import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from '../map/map.component';
import { RegionListComponent } from '../listComponent/regionList.component';
import { HttpClientModule } from '@angular/common/http'
import { RegionComunicationService } from '../communicationServices/region.communication.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule, HttpClientModule ],
    declarations: [ AppComponent, MapComponent, RegionListComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        RegionComunicationService
      ],
})
export class AppModule { }