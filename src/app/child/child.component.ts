import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  @Input() parentMessage: string | undefined
  @Output() childEvent = new EventEmitter<string>()

  sendMessage() {
    this.childEvent.emit("Il figlio risponde")
  }
}
