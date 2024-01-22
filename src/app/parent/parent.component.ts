import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage : string = "Il genitore chiama"

  message : string = ""

  visualizza : boolean = false

  contatore : number = 0

  receiveMessage(childMessage: string) {
    this.message = childMessage
    this.visualizza = true
    this.contatore++
  }
  
}
