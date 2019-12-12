import { Component, OnInit } from '@angular/core';
import { FormService } from '@its-your-practice/shared';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Sequence } from '@its-your-practice/types';

@Component({
  selector: 'its-your-practice-new-sequence-dialog',
  templateUrl: './new-sequence-dialog.component.html',
  styleUrls: ['./new-sequence-dialog.component.css']
})
export class NewSequenceDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formService: FormService,
    private matDialogRef: MatDialogRef<NewSequenceDialogComponent>
  ) { }

  ngOnInit() {
    this.form = this.formService.buildPoseForm();
  }

  onSubmit() {
    const obj = {
      name: this.form.controls['name'].value,
      description: this.form.controls['description'].value
    } as Sequence;

    this.matDialogRef.close(obj);
  }
}
