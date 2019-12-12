import { Component, OnInit } from '@angular/core';
import { SequenceBuilderService } from '../../sequence-builder.service';
import { SequenceStep } from '@its-your-practice/types';
import { sequence } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { SequenceStepDialogComponent } from '../../components/sequence-step-dialog/sequence-step-dialog.component';

@Component({
  selector: 'its-your-practice-sequence-builder',
  templateUrl: './sequence-builder.component.html',
  styleUrls: ['./sequence-builder.component.css']
})
export class SequenceBuilderComponent implements OnInit {
  sequence$ = this.builderService.sequence;

  private stepsStore = new BehaviorSubject<SequenceStep[]>(null);
  public steps$ = this.stepsStore.asObservable();

  constructor(
    private builderService: SequenceBuilderService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() { }

  addStep() {
    const dialog = this.matDialog.open(SequenceStepDialogComponent, { width: '300px' })

    dialog.afterClosed().subscribe((step: SequenceStep) => {

    })

  }

  saveStep(sequenceStep: SequenceStep) {

  }
}
