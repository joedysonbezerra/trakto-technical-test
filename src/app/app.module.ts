import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './pages/login/login.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatTabsModule } from '@angular/material/tabs'
import { FormModule } from './components/form/form.module'
import { ShellModule } from './components/shell/shell.module'

import { MatIconModule } from '@angular/material/icon'
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'

import { AuthGuardService } from './shared/auth.guard.service'

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    FormModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    ShellModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
