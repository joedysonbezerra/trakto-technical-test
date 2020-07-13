import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.css', '../form.module.css']
})
export class FormSigninComponent implements OnInit {
  form: FormGroup

  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }

  onSubmit () {
    const {
      value: { email, password }
    } = this.form

    this.authService.signIn(email, password)
  }
}
