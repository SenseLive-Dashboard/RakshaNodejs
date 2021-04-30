import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.css']
})
export class Grid1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: string[] = [];

  addItem(): void {
    this.items.push(`Meter ${this.items.length + 1}`);
  }

}
