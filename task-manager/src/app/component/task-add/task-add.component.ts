import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../../task-service.service';
import { Router } from '@angular/router';
import { User, UserService } from '../../user-service.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {
  taskForm: FormGroup;
  users: User[] = [];


  constructor(private fb:FormBuilder, private taskservice: TaskServiceService,private router:Router,  private userService: UserService,){
   this.taskForm = this.fb.group({

    title:[''],
    description:[''],
    dueDate:[''],
    priority:['Medium'],
    assigneeId: [''],
    CheckList:this.fb.array([]),
   });
  }

  get mycheckLists():FormArray{
    return this.taskForm.get('CheckList') as FormArray
  }
  addcheckLists(){
    this.mycheckLists.push(this.fb.group({
      name:[''],
      isdone:[false]
    }));
  }

  RemovecheckLists(index:number){
    this.mycheckLists.removeAt(index);
  }

ngOnInit(): void{
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  OnSubmit(){
    let task = this.taskForm.value;
    console.log(task)
    this.taskservice.createTask(task).subscribe(data => {
      this.router.navigate(['/'])
    });
  }
  cancel(){
    this.taskForm.reset();
    this.router.navigate(['/'])
  }
  
}
