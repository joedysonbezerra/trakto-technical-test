import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css', '../form.module.css']
})
export class FormSignupComponent implements OnInit {
  form: FormGroup
  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      name: new FormControl(null)
    })
  }
  onSubmit () {
    const {
      value: { email, password, name }
    } = this.form

    this.authService.signUp(email, password, name)
  }
}
