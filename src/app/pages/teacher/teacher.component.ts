import { Component, OnInit } from "@angular/core";
import { DialogTeacher } from "./dialog-teacher/dialog-teacher.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"],
})
export class TeacherComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogTeacher, { width: "600px" });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
