import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewSequenceDialogComponent } from '../../components';
import { Sequence } from '@its-your-practice/types';
import { AppService } from '@its-your-practice/state';

@Component({
  selector: 'its-your-practice-sequences-home',
  templateUrl: './sequences-home.component.html',
  styleUrls: ['./sequences-home.component.css']
})
export class SequencesHomeComponent implements OnInit {

  constructor(private matDialog: MatDialog, public appService: AppService) { }

  ngOnInit() {
  }

  createNewSequence() {

  }

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
