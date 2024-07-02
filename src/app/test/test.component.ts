import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   text:"The theme selection should be up to the user though. Start by reverting the previous modifications to the src/index.html file in order to use the light theme by default.";
  wordLimit:5;
  showMore :boolean;
  constructor() {
    this.showMore =false
   }

  ngOnInit(): void {
  }

}
