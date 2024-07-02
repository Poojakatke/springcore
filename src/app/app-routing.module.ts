import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';
import { DemotableComponent } from './demotable/demotable.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';
import { DynamictabledataComponent } from './dynamictabledata/dynamictabledata.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { PdfcovertcomponentComponent } from './pdfcovertcomponent/pdfcovertcomponent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';

import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { MenuModelComponent } from './menu-model/menu-model.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { LocationTrackerComponent } from './location-tracker/location-tracker.component';

const routes: Routes = [
  // {path:'',component:TableComponent},
  // {path:'',component:PdfcovertcomponentComponent},
  // {path:'',component:DynamictabledataComponent},
  // {path:'',component:DynamictableComponent},
  // {path :'' , component: SidebarComponent},
  // {path:'', component:DemotableComponent}
  // {path: '' , component:ChartsComponent}
  // {path: '', component: SignupComponent}
  // {path:'' , component:InputtextComponent}
  // {path:'', component:DropdownComponent}
  // {path: '' , component:TestComponent}
  // {path: '' , component: ConfirmdialogComponent}
  {path:'' , component:MenuModelComponent}
  // {path:'', component:BarCodeComponent}
  // {path:'', component:LocationTrackerComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
