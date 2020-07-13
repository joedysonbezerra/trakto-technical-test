import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { TableClassComponent } from './table-class/table-class.component'
import { TableTeacherComponent } from './table-teacher/table-teacher.component'
import { TableStudentComponent } from './table-student/table-student.component'

@NgModule({
  declarations: [
    TableClassComponent,
    TableTeacherComponent,
    TableStudentComponent
  ],
  imports: [CommonModule, MatTableModule],
  exports: [TableClassComponent, TableTeacherComponent, TableStudentComponent]
})
export class TableModule {}
