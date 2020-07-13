import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: string
  constructor (
    public auth: AngularFireAuth,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  getUserId (): string {
    return this.userId
  }

  signIn (email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage['token'] = user.refreshToken
        this.userId = user.uid
        this.router.navigate(['/dashboard'], {
          state: { data: { name: user.displayName } }
        })
      })
      .catch(() => {
        this.alert('Email ou Password incorreto !')
      })
  }
  signUp (email: string, password: string, name: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name
        })
        localStorage['token'] = user.refreshToken
        this.userId = user.uid
        this.router.navigate(['/dashboard'], {
          state: { data: { name } }
        })
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
