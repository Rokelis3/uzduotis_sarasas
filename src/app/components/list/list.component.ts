import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/ListModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public list:Task[]=[];
  
    constructor(private taskService:TaskService) { 
      taskService.load();
      this.list=taskService.list
      
    }

  ngOnInit(): void {
  }

  private save(){
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  public addNewTask(name:HTMLInputElement, select:HTMLSelectElement){
    if (name.value!=''){
      this.list.push({
        name : name.value,
        importance : select.value
      });
      name.value='';
    select.value='';
      this.save();
    }
  }

  public removeTask(i:number){
    this.list.splice(i, 1);
    this.save();
  }
}
