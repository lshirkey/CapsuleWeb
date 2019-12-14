import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskManagementComponent } from './task-management/task-management.component';


const routes: Routes = [
  { path: 'create', component: CreateTaskComponent },
  { path: 'task', component: TaskManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
