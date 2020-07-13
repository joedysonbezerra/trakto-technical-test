import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { TableClassComponent } from './table-class/table-class.component'
import { TableTeacherComponent } from './table-teacher/table-teacher.component'

@NgModule({
  declarations: [TableClassComponent, TableTeacherComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableClassComponent, TableTeacherComponent]
})
export class TableModule {}
