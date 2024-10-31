import { Component, Input } from '@angular/core';

export interface Message {
  text: string;
  isUser: boolean; // Track whether each message is user input or AI response
}

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  @Input() messages: Message[] = [];
}
