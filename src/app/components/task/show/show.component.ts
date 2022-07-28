import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask, ITaskTypeOption } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  taskForm!:FormGroup;
  typeOptions:  ITaskTypeOption[] = [];
  constructor(private fb:FormBuilder, 
    private taskS: TaskService,
    public dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask) { }

  ngOnInit(): void {
    this.taskForm =  this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required], 
    });
   
     this.typeOptions =  this.taskS.getTypeOptions();
    this.show();
  }
 
  show() {
    this.taskS.getTaskById(this.data.id).subscribe(
      res => {
         this.taskForm.controls['title'].setValue(res.title);
         this.taskForm.controls['type'].setValue(res.type);
         this.taskForm.controls['dueDate'].setValue(
           new Date(res.dueDate).toISOString()
         );
         this.taskForm.controls['description'].setValue(res.description);
       },
      error => {
        console.log(error);
        
      }
    )
  }

  updateTask() {
   this.taskS.updateTask(this.taskForm.value, this.data.id).subscribe(
     d=> this.dialogRef.close(), 
     error => console.log(error)
     
   )
  }

  onDeleteTask() {
    this.taskS.deleteTask(this.data.id).subscribe(
      (d) => {
        console.log(d);
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
  }
  }

