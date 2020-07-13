import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  teacher: string
  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.teacher = this.authService.getUserName()
  }
  logout () {
    this.authService.logout()
  }
}
