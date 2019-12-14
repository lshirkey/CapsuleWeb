import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskapiService } from '../service/taskapi.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  columnDefs = [
    {headerName: 'parentId', field: 'parentId'},
    {headerName: 'parentTask', field: 'parentTask'}
  ];

  task = new Task();
  taskui = new Task();
  parent = [];
  errormsg = false;
  successmsg = false;
  // parentarr = [{parentId : 1, parentTask : 'Worldcup1'}];
  constructor(private taskapiService: TaskapiService, private router: Router) {
  }

  ngOnInit() {
    this.taskapiService.getParentList().subscribe((data: any[]) => {
      this.parent = data;
      this.task.taskStatus = 'A';
      }
    );
  }

  onSubmit() {
     this.errormsg = false;
     this.successmsg = false;
     this.taskapiService.createTask(this.task).subscribe((taskui: Task) => {
       if (isNull(taskui)) {
        this.errormsg = true;
       } else {
        this.successmsg = true;
       }
       this.onReset();
      }
     );
  }

  onReset() {
    this.task = new Task();
  }
}
