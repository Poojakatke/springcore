import { Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  customers: any= [];
  products: any[];

  first = 0;

  rows = 10;

  constructor() { }

  ngOnInit() {
    this.customers = data
    this.products = data;
  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.customers ? this.first === (this.customers.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
  }
}
