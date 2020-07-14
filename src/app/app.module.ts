import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { AngularFireModule } from "@angular/fire";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { FormModule } from "./components/forms/form.module";
import { TableModule } from "./components/tables/table.module";
import { ShellModule } from "./components/shell/shell.module";

import { AuthGuardService } from "./shared/auth.guard.service";
import { LoginComponent } from "./pages/login/login.component";
import { ClassComponent } from "./pages/class/class.component";
import { TeacherComponent } from "./pages/teacher/teacher.component";
import { StudentComponent } from "./pages/student/student.component";
import { DialogClass } from "./pages/class/dialog-class/dialog-class.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClassComponent,
    TeacherComponent,
    StudentComponent,
    DialogClass,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    FormModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    ShellModule,
    TableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
