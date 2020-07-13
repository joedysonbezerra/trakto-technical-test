import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.css', '../table.module.css']
})
export class TableTeacherComponent implements OnInit {
  displayedColumns = ['id', 'name', 'classes']
  constructor () {}

  ngOnInit (): void {}
}
