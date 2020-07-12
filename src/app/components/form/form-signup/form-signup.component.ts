import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form-signup",
  templateUrl: "./form-signup.component.html",
  styleUrls: ["./form-signup.component.css"],
})
export class FormSignupComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      name: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.form);
  }
}
