import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent {

  formulario: FormGroup

  constructor() {
    this.formulario = new FormGroup({
      
    })
  }

}
