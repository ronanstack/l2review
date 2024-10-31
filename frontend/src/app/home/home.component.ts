import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Navigate to prompts selection
  startChatWithPrompts() {
    this.router.navigate(['/prompts']);
  }

  // Navigate to open-ended chat
  startChatOpenEnded() {
    this.router.navigate(['/chat']);
  }
}
