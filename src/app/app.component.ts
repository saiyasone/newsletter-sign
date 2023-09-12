import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sletter-sign';

  isDone = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get f(){
    return this.form.controls
  }

  onSave() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
  }
}
