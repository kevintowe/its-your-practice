import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Pose } from '@its-your-practice/types';

@Component({
  selector: 'its-your-practice-poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosesComponent implements OnInit {
  private _poses: Pose[];

  @Input()
  set poses(poses: Pose[]) {
    this._poses = poses || null;
  }
  get poses() { return this._poses };

  primarySanskrit = false;

  @Output() editPose = new EventEmitter<Pose>();

  constructor() {

  }

  ngOnInit() { }

}
