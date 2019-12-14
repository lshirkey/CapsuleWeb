import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskapiService {

  private SERVER_URL = 'http://localhost:8080/capsuleapi';

  constructor(private httpClient: HttpClient) { }

  public getParentList() {
    return this.httpClient.get(this.SERVER_URL + '/parentlist', {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public getTaskList() {
    return this.httpClient.get(this.SERVER_URL + '/tasklist',
    {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public getSearchTaskList(search) {
    return this.httpClient.post(this.SERVER_URL + '/searchtasklist', search,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public createTask(task) {
    return this.httpClient.post(this.SERVER_URL + '/add', task,
    {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public viewTask(task) {
    return this.httpClient.post(this.SERVER_URL + '/view', task,
    {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public updateTask(task) {
    return this.httpClient.post(this.SERVER_URL + '/update', task,
    {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
