import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AppService } from '@its-your-practice/state';
import { Pose } from '@its-your-practice/types';
import { PoseFormDialogComponent } from '../../components';

@Component({
  selector: 'its-your-practice-poses-home',
  templateUrl: './poses-home.component.html',
  styleUrls: ['./poses-home.component.css']
})
export class PosesHomeComponent implements OnInit {
  poses = this.appService.poses$;

  constructor(public appService: AppService, private matDialog: MatDialog) { }

  ngOnInit() {

  }

  async onUpdatePose(pose: Pose) {
    const dialogRef = this.matDialog.open(PoseFormDialogComponent, {
      data: pose,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(async (updatedPose: Pose) => {
      if (updatedPose) {
        try {
          this.appService.persistPose(updatedPose);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

}
