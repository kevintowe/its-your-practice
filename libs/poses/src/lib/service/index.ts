import { Injectable } from '@angular/core';

import { combineLatest, Observable, BehaviorSubject, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'

import { AppService } from '@its-your-practice/state';

@Injectable({ providedIn: 'root' })
export class PosesHomeService {

  constructor(private appService: AppService) { }

  /**
   * This function returns a single observable stream that is generated from 
   * merging together 3 separate streams.
   * - poses from the app service
   * - the value of the search control
   * - the value of the filter control
   */
  public getPoses(
    search$: Observable<string>,
    filterType$: Observable<string>
  ): Observable<any[]> {
    return combineLatest(this.appService.poses$, search$, filterType$).pipe(
      switchMap(([poses, search, filter]) => {
        if (!poses) {
          return of(null);
        }

        // no search value yet, just return the observable of poses
        if (search.length === 0 && filter === null) {
          return of(poses);
        }

        // apply the search value
        else if (search.length !== 0) {
          const returnPoses = [];

          poses.forEach(pose => {
            const lowerCaseName = pose.name.toLowerCase();
            if (lowerCaseName.includes(search.toLowerCase())) {
              returnPoses.push(pose);
            }
          });
          return of(returnPoses);
        }

        // apply the filter
        else if (filter.length !== 0) {
          const returnPoses = [];

          poses.forEach(pose => {
            if (pose.type && pose.type.includes(filter)) {
              returnPoses.push(pose);
            }
          });
          return of(returnPoses);
        }
      })
    );
  }
}
