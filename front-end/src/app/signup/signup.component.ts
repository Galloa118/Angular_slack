import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public http: Http) { }

  ngOnInit() {
  }

  onFormSubmit(form) {
    console.log(form.value);
    this.http.post('http://localhost:8080/api/user', form.value)
    .subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('/');
  }
}
