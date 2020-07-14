import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

interface Teacher {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-form-create-class",
  templateUrl: "./form-create-class.component.html",
  styleUrls: ["./form-create-class.component.css"],
})
export class FormCreateClassComponent implements OnInit {
  form: FormGroup;
  selectedValue: string;

  teachers: Teacher[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      class: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
      averageAge: new FormControl(null),
      teacher: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }
}
