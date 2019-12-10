import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@its-your-practice/state';

@Component({
  selector: 'its-your-practice-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})
export class LandingContainerComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  async login() {
    try {
      await this.authService.loginWithGoolge();
      await this.router.navigate(['']);
    } catch (err) {
      this.notifyUserLoginFailed(err);
    }
  }

  private notifyUserLoginFailed(errMsg: any) { }
}
