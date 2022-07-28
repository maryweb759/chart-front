import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './task/list/list.component';
import { AddComponent } from './task/add/add.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material/material.module';
import { NavigatinComponent } from '../navigatin/navigatin.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './task/show/show.component';
import { TimePickerComponent } from '../dateTime/time-picker/time-picker.component';
import { FormsModule } from '@angular/forms';

// imports for modules and declaration for component

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent, 
    AddComponent,
    NavigatinComponent,
    ShowComponent,
    TimePickerComponent

  ],
  imports: [
    CommonModule, 
    NgChartsModule, 
    MaterialModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule

  ], 
  exports: [
    HomeComponent,
    NgChartsModule,
    NavigatinComponent,
    AppRoutingModule, 
    ReactiveFormsModule,
    
  ]
})
export class ComponentModule { }
