import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { DataFacade, LangFacade } from '@its-your-practice/state';

// import { Pose } from '@its-your-practice/types';
import { MatDialog } from '@angular/material';
import { PoseFormDialogComponent } from '../pose-form-dialog/pose-form-dialog.component';

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
  // poses$ = this.dataFacade.poses$;

  // primarySanskrit$ = this.lang.primarySanskrit$;

  constructor(
    // private dataFacade: DataFacade,
    private matDialog: MatDialog,
    // private lang: LangFacade
  ) { }

  ngOnInit() { }

  // editPose(pose: Pose) {
  //   const dialogRef = this.matDialog.open(PoseFormDialogComponent, {
  //     data: pose,
  //     width: '400px'
  //   });
  //   dialogRef.afterClosed().subscribe(async (result: Pose) => {
  //     if (result) {
  //       console.log(result.description);
  //       await this.dataFacade.updatePose(result);
  //     }
  //   });
  // }
}
