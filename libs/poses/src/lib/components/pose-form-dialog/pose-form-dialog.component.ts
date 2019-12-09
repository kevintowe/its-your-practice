import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@its-your-practice/shared';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pose, PoseTypesUI } from '@its-your-practice/types';

@Component({
  selector: 'its-your-practice-pose-form-dialog',
  templateUrl: './pose-form-dialog.component.html',
  styleUrls: ['./pose-form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoseFormDialogComponent implements OnInit {
  form: FormGroup;

  newPose: boolean;

  poseTypes: any[];

  _ashtangaSeries = [1, 2, 3, 4, 5, 6];
  _seriesName = [
    'Primary Series',
    'Intermediate Series',
    'Advanced A',
    'Advanced B',
    'Advanced C',
    'Advanced D'
  ];

  constructor(
    private formService: FormService,
    private matDialogRef: MatDialogRef<PoseFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: Pose
  ) {
    if (dialogData) {
      this.newPose = false;
    } else {
      this.newPose = true;
    }
    this.poseTypes = PoseTypesUI;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formService.buildPoseForm(this.dialogData);
  }

  onSubmit() {
    console.log(this.form.controls['type'].value);
    const obj = {
      id: this.form.controls['id'].value,
      name: this.form.controls['name'].value,
      abbr: this.form.controls['abbr'].value,
      sanskritName: this.form.controls['sanskritName'].value,
      description: this.form.controls['description'].value,
      ashtangaSeries: this.form.controls['ashtangaSeries'].value,
      type: this.form.controls['type'].value
    } as Pose;

    this.matDialogRef.close(obj);
  }
}
