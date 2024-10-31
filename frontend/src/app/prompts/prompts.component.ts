import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent {
  prompts: string[] = [
    'What is your favorite hobby?',
    'Describe a memorable travel experience.',
    'What are your goals for the future?',
    'Talk about a book you recently read.',
    'What is your favorite food and why?'
  ];

  constructor(private router: Router) {}

  selectPrompt(prompt: string) {
    localStorage.setItem('selectedPrompt', prompt); // Store selected prompt
    this.router.navigate(['/chat']); // Navigate to chat window
  }
}
