import { Component, OnInit } from '@angular/core';
import { Cards } from '../shared/cards';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = Cards;
  constructor() { }

  ngOnInit(): void {
  }

}
