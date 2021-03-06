import { Component } from "@angular/core";

@Component({
  selector: "app-dialog-class",
  template: `<h2 mat-dialog-title>Turma</h2>
    <mat-dialog-content class="mat-typography">
      <app-form-create-class></app-form-create-class>
    </mat-dialog-content>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Fechar</button>
    </div>`,
})
export class DialogClass {}
