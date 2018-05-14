import { Component, Input,Output,EventEmitter } from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";
//import { Output } from "@angular/core/src/metadata/directives";
//import { EventEmitter } from "@angular/core/src/event_emitter";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges
{
    ngOnChanges():void{
        this.starWidth = this.rating * 86/5;

    }
    onClick():void{
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
           }

    @Input() rating: number = 4;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @Output() ratingClicked: EventEmitter<string> =  new EventEmitter<string>();
    starWidth: number = 0;
    title: string = "";


   }