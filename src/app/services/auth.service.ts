import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public auth: AngularFireAuth, public router: Router) {}

  signIn(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
      localStorage["token"] = user.refreshToken;
    });
  }
}
