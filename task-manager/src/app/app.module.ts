import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTaskPipe } from './filter-task.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserAddComponent } from './component/user-add/user-add.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskListComponent,
    FilterTaskPipe,
    UserAddComponent,
    UserListComponent,
    RegisterComponent,
    LoginComponent,
  
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
