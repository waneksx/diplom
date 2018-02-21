import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введите имя пидораса:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}, хуило ты сраное!</h1>`,
                //  <mangol></mangol>`,
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
    name= '';
}