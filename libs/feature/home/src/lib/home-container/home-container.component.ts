import { Component, OnInit } from '@angular/core';

import { AuthService, LanguageService } from '@its-your-practice/state';

@Component({
  selector: 'its-your-practice-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private langService: LanguageService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  toggleLang() {
    this.langService.toggleLang();
  }

  async logout() {
    await this.authService.logout();
  }

}
