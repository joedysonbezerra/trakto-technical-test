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
    this.teacher = localStorage['name']
  }
  logout () {
    this.authService.logout()
  }
}
