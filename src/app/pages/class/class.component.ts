import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogClass } from "./dialog-class/dialog-class.component";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogClass, { width: "600px" });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
