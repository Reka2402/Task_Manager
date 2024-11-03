import { Component, OnInit } from '@angular/core';
import { Task, TaskServiceService } from '../../task-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  [x: string]: any;
  searchText: string = '';

  tasks: Task[] = [];
  constructor(private taskService: TaskServiceService ,private toastr: ToastrService, private router: Router) {

  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
  
    })
  }
  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(data => {
      alert("Task is deleted successfully.");
    })
  }
  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    })

  }
  onEdit(taskId: number) {
    this.router.navigate(['/edit', taskId])
  }
}
