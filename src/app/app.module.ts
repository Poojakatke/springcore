import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{TableModule} from 'primeng/table';
import{ButtonModule} from 'primeng/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PdfcovertcomponentComponent } from './pdfcovertcomponent/pdfcovertcomponent.component';
import { DynamictabledataComponent } from './dynamictabledata/dynamictabledata.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';
import { HeaderComponent } from './dynamictable/header/header.component';
import { SideNavComponent } from './dynamictable/side-nav/side-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebar/sidebar-button/sidebar-button.component';
import {ConfirmationService,} from "primeng/api";
import { DemotableComponent } from './demotable/demotable.component';
import { ChartsComponent } from './charts/charts.component';
import { SignupComponent } from './signup/signup.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModelComponent } from './menu-model/menu-model.component';
import { MenuModule } from "primeng/menu";
import { BarCodeComponent } from './bar-code/bar-code.component';
import { LocationTrackerComponent } from './location-tracker/location-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PdfcovertcomponentComponent,
    DynamictabledataComponent,
    DynamictableComponent,
    HeaderComponent,
    SideNavComponent,
    SidebarComponent,
    SidebarButtonComponent,
    DemotableComponent,
    ChartsComponent,
    SignupComponent,
    InputtextComponent,
    DropdownComponent,
    ConfirmdialogComponent,
    MenuModelComponent,
    BarCodeComponent,
    LocationTrackerComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    DropdownModule,
    MenuModule,
    BrowserAnimationsModule,

  ],
  providers: [  ConfirmationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
