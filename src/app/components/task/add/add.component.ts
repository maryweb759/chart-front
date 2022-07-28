import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ITaskTypeOption, ITypePercentage } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  taskForm!:FormGroup;
  typeOptions:  ITaskTypeOption[] = [];
  constructor(private fb:FormBuilder, private taskS: TaskService, private route: Router) { }

  ngOnInit(): void {
    this.taskForm =  this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required], 
    });
   
     this.typeOptions =  this.taskS.getTypeOptions();
    
  }
  addTask() {
   this.taskS.addTask(this.taskForm.value).subscribe(
     res => {
       console.log(res); 
       this.route.navigateByUrl('/');
       
     } 
     , error => console.log(error)
     
   )
  }
}
