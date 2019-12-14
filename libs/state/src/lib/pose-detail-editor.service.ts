import { Injectable } from "@angular/core";
import { Pose } from '@its-your-practice/types';
import { BehaviorSubject, Subject } from 'rxjs';
import { first, skip } from 'rxjs/operators';
import { AppService } from './app.service';
import { DetailEditor } from './detail-editor.class';

@Injectable({ providedIn: 'root' })
export class PoseDetailEditor extends DetailEditor<Pose>{

  // private editorStore = new Subject<Pose>();
  // public poseEditor$ = this.editorStore.asObservable();

  // private persistPoseStore = new Subject<Pose>();
  // private persistPose$ = this.persistPoseStore.asObservable();

  constructor(appService: AppService) {
    super(appService)
  }

  // async openEditor(pose: Pose) {
  //   this.editorStore.next(pose);  // home component is subscribed to poseEditor$ and will open Editor Dialog

  //   const persistMe = await this.persistPose$.pipe(first()).toPromise();

  //   if (persistMe) {
  //     if (pose) {
  //       return this.appService.persistPose(persistMe);
  //     } else {
  //       const newPose = await this.appService.createPose(persistMe);
  //       return newPose;
  //     }
  //   } else {
  //     return null;
  //   }
  // }

  // persistPose(pose: Pose) {
  //   this.persistPoseStore.next(pose);
  // }
}