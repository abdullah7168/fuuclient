import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  post:any;
  temp:any;

  constructor(public http: Http,private router: Router) { 
    this.post = {
      'misid':'',
      'password':''
    };
  }

  ngOnInit() {
  }


  submitApplication() {
    let params = new URLSearchParams();
    params.append('misid', this.post.misid);
    params.append('password', this.post.password);

    this.http.post('http://localhost:8080/laravel/public/api/student/login',params)
             .map(res => res.json())
             .subscribe((data) => {
                this.temp = data;
                console.log(this.temp.student);
                if(this.temp.student != undefined){
                    //store to native storage
                    localStorage.setItem('currentuser', JSON.stringify(this.temp.student));
                    this.router.navigate(['request-degree']);
                } else {

                  // start a toast to display error
                  // or alert
                  
                }
             });
  }


}
