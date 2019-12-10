import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Pose } from '@its-your-practice/types';

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private fb: FormBuilder) { }

  buildPoseForm(pose?: Pose) {
    const form = {} as any;

    console.log(pose);

    form['name'] = [pose ? pose.name : '', [Validators.required]];
    form['abbr'] = [pose ? pose.abbr : ''];
    form['sanskritName'] = [pose ? pose.sanskritName : ''];
    form['description'] = [pose ? pose.description : ''];
    form['ashtangaSeries'] = [pose ? pose.ashtangaSeries : null];
    form['id'] = [pose ? pose.id : null];
    form['type'] = [pose ? pose.type : null]

    return this.fb.group(form) as FormGroup;
  }
}