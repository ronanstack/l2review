import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'L2Review';
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getWelcomeMsg().subscribe(response => {
      this.message = response.message;
      console.log(this.message);
    });
  }

  // Navigate to home screen
  goHome() {
    this.router.navigate(['/']);
  }
}
