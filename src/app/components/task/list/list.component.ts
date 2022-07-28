import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/service/task.service';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() refreshEmitter = new EventEmitter<boolean>();
  tasks?: ITask[] ;

  constructor(private taskS :TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTask();

  }
  getTask() {
    this.taskS.getTask().subscribe(
     response => this.tasks = response
   );
 }

 onDialogOpen(task: ITask) {
  const dialogRef = this.dialog.open(ShowComponent, {
    data: task,
  });

  dialogRef.afterClosed().subscribe((result) => {
    this.getTask(); 
    this.refreshEmitter.emit(true);
  });
}
 }

