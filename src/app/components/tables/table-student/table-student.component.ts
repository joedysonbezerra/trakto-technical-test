import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css', '../table.module.css']
})
export class TableStudentComponent implements OnInit {
  displayedColumns = ['id', 'name', 'age', 'photo', 'parent', 'class', 'action']
  constructor () {}

  ngOnInit (): void {}
}
