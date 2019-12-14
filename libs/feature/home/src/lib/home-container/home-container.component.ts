import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService, LanguageService, AppService, PoseDetailEditor } from '@its-your-practice/state';
import { MatDialog } from '@angular/material';
import { Pose } from '@its-your-practice/types';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { PoseFormDialogComponent } from '@its-your-practice/poses';
import { SubSink } from 'subsink';

@Component({
  selector: 'its-your-practice-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  navLink = [
    {
      path: './poses',
      label: 'Poses'
    },
    {
      path: './sequences',
      label: 'Sequences'
    },
    {
      path: 'classes',
      label: 'Classes'
    }
  ]

  constructor(
    private langService: LanguageService,
    private authService: AuthService,
    private appService: AppService,
    private poseEditorService: PoseDetailEditor,
    private matDialog: MatDialog

  ) { }

  ngOnInit() {
    this.subs.sink = this.poseEditorService.poseEditor$.subscribe(pose => {
      this.openPoseDialog(pose);
    })
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  toggleLang() {
    this.langService.toggleLang();
  }

  async logout() {
    await this.authService.logout();
  }

  private openPoseDialog(pose: Pose) {
    const dialogRef = this.matDialog.open(PoseFormDialogComponent, {
      data: pose,
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(async (editedPose: Pose) => {
      if (editedPose) {
        this.poseEditorService.persistPose(editedPose);
      } else {
        this.poseEditorService.persistPose(null);
      }
    })
  }

}
