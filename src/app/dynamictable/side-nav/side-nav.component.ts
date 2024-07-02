import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
@Input() sideNavStatus: boolean=false;
  list=[
  { 
    number:1,
    name : 'Home',
    icon :'pi pi-home',
   },
   { 
    number:1,
    name : 'Worklist',
    icon :'pi pi-list',
   },
   { 
    number:1,
    name : 'Configurations',
    icon :'pi pi-briefcase',
   },
   { 
    number:1,
    name : 'Table',
    icon :'pi pi-github',
   },
]
  constructor(){}
  ngOnInit(): void {
   
  }
  
}
