import { Component } from '@angular/core';


interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}
@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent {
  tableData: People[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit() {
      this.cols = [
          { field: "firstname", header: "First Name" },
          { field: "lastname", header: "Last Name" },
          { field: "age", header: "Age" },
      ];
      this.tableData = [
          {
              firstname: "David",
              lastname: "ace",
              age: "40",
          },
          {
              firstname: "AJne",
              lastname: "west",
              age: "10",
          },
          {
              firstname: "Mak",
              lastname: "Lame",
              age: "20",
          }
      ];
  }

}
