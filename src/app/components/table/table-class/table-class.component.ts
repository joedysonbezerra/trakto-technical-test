import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-table-class',
  templateUrl: './table-class.component.html',
  styleUrls: ['./table-class.component.css', '../table.module.css']
})
export class TableClassComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'start',
    'end',
    'averageAge',
    'teacher',
    'action'
  ]
  constructor () {}

  ngOnInit (): void {}
}
