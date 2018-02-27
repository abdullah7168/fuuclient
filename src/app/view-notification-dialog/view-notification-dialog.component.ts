import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Component({
  template: `
    <h1 mat-dialog-title>Degree Verification Request</h1>
    <mat-dialog-content *ngIf="data != undefined">
      {{data.notes}}
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="closeDialog(data.id)">Okay</button>
    </mat-dialog-actions>
  `
})
export class ViewNotificationDialogComponent implements OnInit {

  constructor(public http: Http,private dialogRef: MatDialogRef<ViewNotificationDialogComponent>,@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeDialog(id){
    
    let params = new URLSearchParams;
    params.append('id',id);
    this.http.post('http://localhost:8080/fuuast/public/api/seen-notification',params)
    .map(res => res.json())
    .subscribe((data) => {
    });


    this.dialogRef.close();
  }
}
