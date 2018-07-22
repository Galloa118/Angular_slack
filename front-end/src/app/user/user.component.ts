import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, public http: Http) { }

  ngOnInit() {
  }

  getUserEmail() {
    return localStorage.getItem('email');
  }

  onchangepassFormSubmit(form) {
    console.log(form.value.oldpassword);
    console.log(this.getUserEmail());
    this.http.post('http://localhost:8080/api/getid', form.value)
    .subscribe(data => {
      console.log(data);
    });
    // this.router.navigateByUrl('/');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

}
