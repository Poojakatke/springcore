import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]
})
export class SidebarButtonComponent {
  visibleSidebar1: any;
    
  visibleSidebar2: any;
  
  visibleSidebar3: any;
  
  visibleSidebar4: any;
  
  visibleSidebar5: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
