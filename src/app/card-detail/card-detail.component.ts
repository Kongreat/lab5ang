import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/card';
import { Cards } from '../shared/cards';



@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input()
  card: Card;
  constructor() {
  }

  getName(){

  }
  ngOnInit(): void {

  }

  sendHex(event: any){
    this.card.hex = event.target.value;
  }

  sendColor(event: any){
    this.card.name = event.target.value;
  }

}
