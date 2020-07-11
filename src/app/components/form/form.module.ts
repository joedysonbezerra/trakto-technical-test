import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormSigninComponent } from "./form-signin/form-signin.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [FormSigninComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule],
  exports: [FormSigninComponent],
})
export class FormModule {}
