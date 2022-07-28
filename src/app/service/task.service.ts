import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { ITask, ITaskTypeOption, ITypePercentage } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly url = "http://localhost:8080/api/v1/task";
  constructor(private http: HttpClient) { }

    getTask():Observable<ITask[]> {
     return this.http.get<ITask[]>(this.url).pipe(
       map(res => res));    
    } 

    addTask(task: ITask):Observable<ITask> {
      return this.http.post<ITask>(this.url, task)
        .pipe(map(res => res))
    }
  
    updateTask(task: ITask, id: string): Observable<ITask> {
      return this.http
        .put<ITask>(`http://localhost:8080/api/v1/task/${id}`, task)
        .pipe(map(d => d));
    } 

    deleteTask(id: string) {
      return this.http.delete(`http://localhost:8080/api/v1/task/${id}`);
    } 

   getTypePercentage():Observable<ITypePercentage[]> {
   return this.http.get<ITypePercentage[]>(this.url + '/vData/percentcounttype').pipe(
     map(res => res)
   )
   }
   getTypeOptions():ITaskTypeOption[] {
    return [{ type: 'done' }, { type: 'todo' }, { type: 'pending' }];
  } 

  getTaskById(id: string): Observable<ITask> {
    return this.http
      .get<ITask>(`http://localhost:8080/api/v1/task/${id}`)
      .pipe(map(d => d));
  }
}
