import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/ListModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public list:Task[]=[];
  
    constructor() { 
      let data=localStorage.getItem("list");
      if (data!=null){
        this.list=JSON.parse(data);
      }
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
