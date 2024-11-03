import { NgModule } from '@angular/core';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserAddComponent } from './component/user-add/user-add.component';


const routes: Routes = [
  { path: 'tasks', component: TaskListComponent},
  {path:'add',component:TaskAddComponent},
  {path:'',component:TaskListComponent},
  {path:'edit/:id',component:TaskEditComponent},
  
  { path: 'users', component: UserListComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-edit/:id', component: UserAddComponent }


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }