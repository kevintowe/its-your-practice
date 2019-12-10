import { Component, OnInit } from '@angular/core';

import { AuthService, LanguageService } from '@its-your-practice/state';
import { Router } from '@angular/router';

@Component({
  selector: 'its-your-practice-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private langService: LanguageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleLang() {
    this.langService.toggleLang();
  }

  async logout() {
    await this.authService.logout();
  }

  tabChange(tabChange: any) {
    const index = tabChange.index;
    if (index === 0) {
      this.router.navigate(['']);
    } else if (index === 1) {
      this.router.navigate(['sequences']);
    } else if (index === 2) {
      this.router.navigate(['classes']);
    }

  }

}
