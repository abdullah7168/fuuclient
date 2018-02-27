import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewNotificationDialogComponent } from '../view-notification-dialog/view-notification-dialog.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dgvrf',
  templateUrl: './dgvrf.component.html',
  styleUrls: ['./dgvrf.component.css']
})
export class DgvrfComponent implements OnInit {
  viewNotificationDialogRef : MatDialogRef<ViewNotificationDialogComponent>;
  dpts:any;
  programs:any;
  notifications:any;
  student:any;
  constructor(public http: Http,private router: Router,private dialog: MatDialog) { 
    this.dpts = [
      {'name':'CS'},
      {'name':'BCOM'},
      {'name':'SE'}
    ];
    this.programs = [
      {'name':'BS'},
      {'name':'MS'}
    ];
    this.notifications = [];
    this.student = '';
    var me = JSON.parse(localStorage.getItem('currentuser'));
    this.student = me;
    console.log(this.student.id);

    let params = new URLSearchParams;
        params.append('student_id',this.student.id);
        this.http.post('http://localhost:8080/fuuast/public/api/watch-for-reply',params)
             .map(res => res.json())
             .subscribe((data) => {
                console.log('data');
                this.notifications = data.notifications;
                console.log(this.notifications);
             });
      
    
   }

  ngOnInit() {
  }

  sendApplication(){
    console.log(this.student);
    let params = new URLSearchParams;
    params.append('student_id',this.student.id);
    this.http.post('http://localhost:8080/fuuast/public/api/degree-request',params)
             .map(res => res.json())
             .subscribe((data) => {
                console.log('data');
             });
  }


  openViewNotificationDialog(id) {
    let params = new URLSearchParams;
        params.append('id',id);
        this.http.post('http://localhost:8080/fuuast/public/api/get-notification',params)
                .map(res => res.json())
                .subscribe((result) => {
                  this.viewNotificationDialogRef = this.dialog.open(ViewNotificationDialogComponent,{
                    hasBackdrop: true,
                    data: result.notification,
                  });

                  // this.viewNotificationDialogRef
                  // .afterClosed()
                  // .subscribe((data))
                });
    
              
  }


}
