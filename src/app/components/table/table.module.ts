import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { TableClassComponent } from './table-class/table-class.component'

@NgModule({
  declarations: [TableClassComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableClassComponent]
})
export class TableModule {}
