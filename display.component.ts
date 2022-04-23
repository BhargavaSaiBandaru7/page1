import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  users$: User[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.getUsers()
      .subscribe(data =>
        {
          console.log(data)
          this.users$=data
        }
        
        );
  }

}
