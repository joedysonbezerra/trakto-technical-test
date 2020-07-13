import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  teacher = 'Joedyson Bezerra'
  constructor (private authService: AuthService) {}

  ngOnInit (): void {}
  logout () {
    this.authService.logout()
  }
}