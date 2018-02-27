import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responce',
  templateUrl: './responce.component.html',
  styleUrls: ['./responce.component.css']
})
export class ResponceComponent implements OnInit {
  notifications:any;
  constructor() { 
    this.notifications = [
      {
        'id':'1',
        'status':'0',
        'note':'this is a test notificaiton'
      },
      {
        'id':'1',
        'status':'0',
        'note':'this is a test notificaiton'
      },
      {
        'id':'1',
        'status':'0',
        'note':'this is a test notificaiton'
      },
    ]
   }

  ngOnInit() {
  }

}
