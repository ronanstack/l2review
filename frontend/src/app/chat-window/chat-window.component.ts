import { Component } from '@angular/core';
import { Message } from '../message-list/message-list.component';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  messages: Message[] = [];
  selectedPrompt: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Retrieve the selected prompt from local storage
    this.selectedPrompt = localStorage.getItem('selectedPrompt');
  }

  sendMessage(message: string) {
    this.messages.push({ text: message, isUser: true });

    forkJoin({
      feedback: this.apiService.analyzeUserInput('en', message), // Analyze input and provide feedback on grammar
      conversation: this.apiService.respondToInput('en', message) // Respond to the input to continue the conversation
    }).subscribe(({ feedback, conversation }) => {
      console.log('Feedback:', feedback);
      console.log('Response:', conversation);

      // Feedback
      const aiFeedback = feedback.results.join('\n');
      this.messages.push({ text: aiFeedback, isUser: false });

      // Conversation continuation
      const aiResponse = conversation.results;
      this.messages.push({ text: aiResponse, isUser: false });
    })
  }
}