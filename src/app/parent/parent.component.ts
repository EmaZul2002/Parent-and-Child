import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = "Il genitore chiama"

  receiveMessage($event: string) {
    const receiveMessage = $event
  }
  
}
