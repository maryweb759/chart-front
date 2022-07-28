import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  dateFilter!: { startDate: Date; endDate: Date; };
  myDatePicker:any;
  @ViewChild('picker') picker: any;

  constructor() { }

  ngOnInit(): void { 
    // DATE FILTER 
    this.dateFilter = {
      startDate: new Date((new Date().getTime()) - 86400000 * 30),
      endDate: new Date()
    }
  }
  onDateSelected(){
    console.log(this.dateFilter.endDate);
    
  }
}
