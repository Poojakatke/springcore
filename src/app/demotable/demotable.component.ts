import { Component, OnInit } from '@angular/core';
import  tableData from '../../assets/tableData.json'
@Component({
  selector: 'app-demotable',
  templateUrl: './demotable.component.html',
  styleUrls: ['./demotable.component.css']
})
export class DemotableComponent implements OnInit{
  list:any;
  ngOnInit(): void {
    this.list=tableData.data;
    console.log(this.list)
  }

 
 
    

}
