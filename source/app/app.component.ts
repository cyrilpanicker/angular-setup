import { Component } from '@angular/core';

@Component({
    selector:'app',
    templateUrl:'./app.component.html',
    // styleUrls:['./app.component.css']
    styles:[`
        .user-input, .user-ouput{
            margin-top: 30px;
        }
    `]
})
export class AppComponent{
    text='Hello World..';
}
