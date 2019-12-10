/**
 * Core container
 * 
 * NOTE: there is another component called `PosesComponent`, but
 * it is a list view of poses, whilest this component is the core container
 * for the poses feature module.
 */

import { Component, OnInit } from '@angular/core';

import { AppService } from '@its-your-practice/state';

@Component({
  selector: 'its-your-practice-poses-home',
  templateUrl: './poses-home.component.html',
  styleUrls: ['./poses-home.component.css']
})
export class PosesHomeComponent implements OnInit {
  poses = this.appService.poses$;

  constructor(public appService: AppService) { }

  ngOnInit() {

  }

}
