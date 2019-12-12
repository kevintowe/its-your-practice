import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AppService } from '@its-your-practice/state';
import { Pose, PoseTypesUI } from '@its-your-practice/types';
import { PoseFormDialogComponent } from '../../components';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { PosesHomeService } from '../../service';

@Component({
  selector: 'its-your-practice-poses-home',
  templateUrl: './poses-home.component.html',
  styleUrls: ['./poses-home.component.css'],
  providers: [PosesHomeService]
})
export class PosesHomeComponent implements OnInit {
  // // Search form control
  searchControl = new FormControl(null);
  searchValue$ = this.searchControl.valueChanges.pipe(startWith(''));
  // filter by type form control
  filterTypeControl = new FormControl(null);
  filterValue$ = this.filterTypeControl.valueChanges.pipe(startWith(null));

  poseTypes = PoseTypesUI;

  poses$: Observable<Pose[]>;

  constructor(
    public appService: AppService,
    private matDialog: MatDialog,
    public posesHomeService: PosesHomeService
  ) { }

  ngOnInit() {
    this.poses$ = this.posesHomeService.getPoses(
      this.searchValue$,
      this.filterValue$
    );
  }

  async onCreatePose() {
    const dialogRef = this.matDialog.open(PoseFormDialogComponent, {
      data: null,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(async (newPose: Pose) => {
      if (newPose) {
        try {
          this.appService.createPose(newPose);
        } catch (err) {
          console.log(err);
        }
      }
    });
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
