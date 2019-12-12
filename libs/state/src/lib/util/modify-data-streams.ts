import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pose } from '@its-your-practice/types';

@Injectable({ providedIn: 'root' })
export class ModifyDataStreams {
  constructor(private appService: AppService) { }

  public getFilteredPoses(search$: Observable<string>) {
    return combineLatest(this.appService.poses$, search$).pipe(
      switchMap(([poses, search]) => {
        if (search.length !== 0) {
          const filteredResponse = [] as Pose[];

          poses.forEach(pose => {
            const lowerCasePose = pose.name.toLowerCase();
            if (lowerCasePose.includes(search.toLowerCase())) {
              filteredResponse.push(pose);
            }
          })
          return of(filteredResponse)
        } else {
          return of(poses);
        }
      })
    );
  }
}
