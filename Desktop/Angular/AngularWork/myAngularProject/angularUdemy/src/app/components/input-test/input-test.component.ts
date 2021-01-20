import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from 'src/app/model/user';
import { InputTestService } from 'src/app/services/input-test.service';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  form: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private inputTestService: InputTestService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      userAge: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    this.userSubmitted = true;
    if (this.form.valid) {
      this.inputTestService.addUser(this.userData());
      this.form.reset();
      this.userSubmitted = false;
    }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      userAge: this.userAge.value,
      email: this.email.value,
      password: this.password.value
    }
  }

  get userName() {
    return this.form.get('userName') as FormControl;
  }
  get userAge() {
    return this.form.get('userAge') as FormControl;
  }
  get email() {
    return this.form.get('email') as FormControl
  }
  get password() {
    return this.form.get('password') as FormControl
  }

}
