import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api'
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-menu-model',
  templateUrl: './menu-model.component.html',
  styleUrls: ['./menu-model.component.css']
})
export class MenuModelComponent {
  @ViewChild('myMenu') menu!:  Menu;
  navigation: MenuItem[] = [];
  ngOnInit()
    {
        this.navigation = [
            {
                label: "Home",
                icon: "pi pi-home"
            },
            {
                label: "AboutAboutAboutAboutAboutAboutAbout",
                icon: "pi pi-exclamation-circle"
            },
            {
                label: "Gallery",
                icon: "pi pi-images"
            },
            {
                label: "Account",
                icon: "pi pi-user"
            },
            {
                label: "Others",
                icon: "pi pi-plus-circle"
            }
        ]
    }
  toggleMenu($ev: Event)
    {
        this.menu.toggle($ev);
       
    }
}
