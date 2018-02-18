import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MangolModule } from 'mangol';

@NgModule({
    imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule, MangolModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }