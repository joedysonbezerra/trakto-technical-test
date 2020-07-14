import { Component, OnInit } from "@angular/core";
import { DialogStudent } from "./dialog-student/dialog-student.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogStudent, { width: "600px" });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
