import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isDone = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.form.controls;
  }

  onSave() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.router.navigate(['/subscribe'], {
      queryParams: {
        subscribe: this.f['email'].value,
      },
    });
  }
}
