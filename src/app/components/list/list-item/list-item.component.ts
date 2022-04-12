import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/ListModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

@Input() public task:Task={name:"", importance:""};
@Input() public index:number=0;


  constructor(private listService:TaskService) { }

  ngOnInit(): void {
  }


  public deleteTask(){
    this.listService.delete(this.index);
  }
}
