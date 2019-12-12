import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Sequence } from '@its-your-practice/types';
import { SequenceBuilderService } from '../../sequence-builder/sequence-builder.service';

@Component({
  selector: 'its-your-practice-sequences-list',
  templateUrl: './sequences-list.component.html',
  styleUrls: ['./sequences-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SequencesListComponent implements OnInit {

  private _sequences: Sequence[];

  @Input()
  set sequences(sequences: Sequence[]) {
    this._sequences = sequences || null;
  }
  get sequences(): Sequence[] { return this._sequences }

  constructor(private sequencesService: SequenceBuilderService) { }

  ngOnInit() {
  }

  sequenceSelected(id: string) {
    this.sequencesService.initSequence(id);
  }



}
