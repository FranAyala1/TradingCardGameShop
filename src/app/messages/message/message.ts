import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  imports: [],
  standalone: true,
  providers: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  lastMessage?: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe((msg: Message | undefined) => this.lastMessage = msg);
  }
}
