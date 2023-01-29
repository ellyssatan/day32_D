import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { animal } from '../animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

  form: animal = {
    id: 0,
    name: '',
    lifespan: 0,
    email: ''
  };

  onSubmit(form: NgForm) {
    console.log('Animal entered: ', form.value)
  }

  onReset(form: NgForm) {
    form.reset();
  }
}
