import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
// import { DataFacade, LangFacade } from '@its-your-practice/state';

// import { Pose } from '@its-your-practice/types';
import { MatDialog } from '@angular/material';
import { PoseFormDialogComponent } from '../pose-form-dialog/pose-form-dialog.component';
import { Pose } from '@its-your-practice/types';

interface DisplayConfig {
  sanskritAsPrimary: boolean;
}

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
    console.log(poses);
  }
  get poses() { return this._poses };

  primarySanskrit = false;

  constructor() { }

  ngOnInit() { }

  editPose(pose: Pose) {
    // const dialogRef = this.matDialog.open(PoseFormDialogComponent, {
    //   data: pose,
    //   width: '400px'
    // });
    // dialogRef.afterClosed().subscribe(async (result: Pose) => {
    //   if (result) {
    //     console.log(result.description);
    //     await this.dataFacade.updatePose(result);
    //   }
    // });
  }
}
