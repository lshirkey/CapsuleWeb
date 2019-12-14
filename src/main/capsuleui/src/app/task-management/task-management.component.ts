import { Component, OnInit } from '@angular/core';
import { TaskapiService } from '../service/taskapi.service';
import { Search } from '../model/search';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {

  search = new Search();
  editTask = new Task();
  endTask = new Task();
  viewTask = new Task();
  deleteTask = new Task();
  tasks = [];
  parent = [];
  activediv = 1;

  constructor(private taskapiService: TaskapiService) { }

  ngOnInit() {
    this.taskapiService.getTaskList().subscribe((data: any[]) => {
      this.tasks = data;
      }
    );

    this.taskapiService.getParentList().subscribe((data: any[]) => {
      this.parent = data;
      }
    );
  }

  onSearch() {
    this.taskapiService.getSearchTaskList(this.search).subscribe(
      (data: any[]) => {
        this.tasks = data;
        }
    );
  }

  onEditTask(task) {
    this.activediv = 2;
    this.taskapiService.viewTask(task).subscribe((taskDetail: Task) => {
      this.editTask = taskDetail;
     }
    );
  }
  onEditTaskSave() {
    this.taskapiService.updateTask(this.editTask).subscribe(
      _ => {
        this.onSearch();
        }
    );
    this.activediv = 1;
  }
  onEditTaskCancel() {
    this.editTask = new Task();
    this.activediv = 1;
  }

  onEndTask(task) {
    this.activediv = 3;
    this.taskapiService.viewTask(task).subscribe((taskDetail: Task) => {
      this.endTask = taskDetail;
     }
    );
  }
  onEndTaskSave() {
    this.endTask.taskStatus = 'E';
    this.taskapiService.updateTask(this.endTask).subscribe(
      _ => {
        this.onSearch();
      }
    );
    this.activediv = 1;
  }
  onEndTaskCancel() {
    this.endTask = new Task();
    this.activediv = 1;
  }

  onViewTask(task) {
    this.activediv = 4;
    this.viewTask = task;
  }
  onViewTaskCancel() {
    this.viewTask = new Task();
    this.activediv = 1;
  }

  onDeleteTask(task) {
    this.activediv = 5;
    this.deleteTask = task;
  }
  onDeleteTaskSave() {
    this.deleteTask.taskStatus = 'D';
    this.taskapiService.updateTask(this.deleteTask).subscribe(
      _ => {
        this.onSearch();
      }
    );
    this.activediv = 1;
  }
  onDeleteTaskCancel() {
    this.deleteTask = new Task();
    this.activediv = 1;
  }

}