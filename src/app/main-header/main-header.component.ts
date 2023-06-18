import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}

  onlogout() {
    this.authService.setAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
