import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./pages/login/login.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from "@angular/material/tabs";
import { FormModule } from "./components/forms/form.module";
import { TableModule } from "./components/tables/table.module";

import { ShellModule } from "./components/shell/shell.module";

import { MatIconModule } from "@angular/material/icon";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";

import { AuthGuardService } from "./shared/auth.guard.service";
import { ClassComponent } from "./pages/class/class.component";
import { TeacherComponent } from "./pages/teacher/teacher.component";
import { StudentComponent } from "./pages/student/student.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClassComponent,
    TeacherComponent,
    StudentComponent,
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
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
