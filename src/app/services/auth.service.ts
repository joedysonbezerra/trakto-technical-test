import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (
    public auth: AngularFireAuth,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  signIn (email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage['token'] = user.refreshToken
        this.router.navigate(['/dashboard'])
      })
      .catch(() => {
        this.alert('Email ou Password incorreto !')
      })
  }
  signUp (email: string, password: string, name: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage['token'] = user.refreshToken
        this.router.navigate(['/dashboard'])
      })
      .catch(error => {
        console.log(error)
        if (error.code === 'auth/email-already-in-use')
          this.alert('Email já está sendo utilizado !')

        if (error.code === 'auth/weak-password')
          this.alert('A senha deve ter pelo menos 6 caracteres !')
      })
  }
  logout () {
    this.auth.signOut()
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  private alert (msg: string) {
    this.snackBar.open(msg, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}
