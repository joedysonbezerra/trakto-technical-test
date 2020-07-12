import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form-signin",
  templateUrl: "./form-signin.component.html",
  styleUrls: ["./form-signin.component.css"],
})
export class FormSigninComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
