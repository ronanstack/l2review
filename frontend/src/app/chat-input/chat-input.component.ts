import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  message: string = '';
  
  @Output() sendMessage = new EventEmitter<string>();

  send() {
    if (this.message.trim()) {
      this.sendMessage.emit(this.message);
      this.message = ''; // Clear input field
    }
  }
}
