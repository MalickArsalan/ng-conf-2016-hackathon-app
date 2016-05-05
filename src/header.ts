import {Component} from 'angular2/core';
@Component({
    selector: 'header',
    template:
    .    <h1>{{title}}<h1>
        
    stylesUrl: ['src/styles.css']
})

export class Header{
    public title: string = 'Dune 2000'
}