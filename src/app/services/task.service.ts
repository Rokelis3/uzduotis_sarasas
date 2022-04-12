import { Injectable } from '@angular/core';
import { Task } from '../models/ListModel';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public list:Task[]=[];
  constructor() { }

  public load(){
    let data=localStorage.getItem("list");
    if (data!=null){
      this.list=JSON.parse(data);
    }
  }
  public save(){
    localStorage.setItem("list", JSON.stringify(this.list));
  }

  public add(name:string, importance:string){
    this.list.push({
      name  : name,
      importance : importance
    });
    this.save();
  }

  public delete(index:number){
    this.list.splice(index,1);
    this.save();
  }
}