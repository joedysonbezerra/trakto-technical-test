import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  signIn(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage["token"] = user.refreshToken;
        this.router.navigate(["/dashboard"]);
      })
      .catch(() => {
        this.snackBar.open("Email ou Password incorreto !", "", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      });
  }
}
