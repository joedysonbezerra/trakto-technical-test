import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { ClassComponent } from './pages/class/class.component'
import { TeacherComponent } from './pages/teacher/teacher.component'
import { StudentComponent } from './pages/student/student.component'

import { ShellComponent } from './components/shell/shell.component'
import { AuthGuardService } from './shared/auth.guard.service'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: ShellComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'classes',
        component: ClassComponent
      },
      {
        path: 'teachers',
        component: TeacherComponent
      },
      {
        path: 'students',
        component: StudentComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
