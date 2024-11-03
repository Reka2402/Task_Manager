import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }
  getTasks() {
    return this.http.get<Task[]>('http://localhost:5244/api/TaskItems');
  }
  createTask(task:Task){
    return this.http.post('http://localhost:5244/api/TaskItems' , task);
  }
  deleteTask(taskId:number){
    return this.http.delete('http://localhost:5244/api/TaskItems/' + taskId)
  }
  getTask(taskId:number){
    return this.http.get<Task>('http://localhost:5244/api/TaskItems/' + taskId)
  }
  updateTask(task: Task) {
    return this.http.put('http://localhost:5244/api/TaskItems/' + task.id, task);
  }

}
export interface Task{
  id:number;
  title:string;
  description:string;
  dueDate:Date;
  priority:string;
  assignee?: User;

}

