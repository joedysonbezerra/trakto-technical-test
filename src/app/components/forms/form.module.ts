import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormSigninComponent } from "./form-signin/form-signin.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormSignupComponent } from "./form-signup/form-signup.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormCreateClassComponent } from "./form-create-class/form-create-class.component";
import { MatSelectModule } from "@angular/material/select";
import { FormCreateStudentComponent } from "./form-create-student/form-create-student.component";
import { FormCreateTeacherComponent } from "./form-create-teacher/form-create-teacher.component";

@NgModule({
  declarations: [
    FormSigninComponent,
    FormSignupComponent,
    FormCreateClassComponent,
    FormCreateStudentComponent,
    FormCreateTeacherComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  exports: [
    FormSigninComponent,
    FormSignupComponent,
    FormCreateClassComponent,
    FormCreateStudentComponent,
    FormCreateTeacherComponent,
  ],
})
export class FormModule {}
