import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Message } from '../model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.html'
})
export class MessageComponent {
  @Input() message: Message | null = null;
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter<boolean>();

  close(): void {
    this.dismiss.emit(true);
  }
}
