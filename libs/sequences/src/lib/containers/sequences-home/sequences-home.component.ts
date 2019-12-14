import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

import { Sequence } from '@its-your-practice/types';
import { AppService } from '@its-your-practice/state';
import { NewSequenceDialogComponent } from '../../components';

@Component({
  selector: 'its-your-practice-sequences-home',
  templateUrl: './sequences-home.component.html',
  styleUrls: ['./sequences-home.component.css']
})
export class SequencesHomeComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private matDialog: MatDialog,
    public appService: AppService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() { }

  ngOnDestroy() {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  createNewSequence() { }

  async onCreateSequence() {
    const dialogRef = this.matDialog.open(NewSequenceDialogComponent, {
      data: null,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(async (newSequence: Sequence) => {
      if (newSequence) {
        try {
          this.appService.createSequence(newSequence);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }
}
