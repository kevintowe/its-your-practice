import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { AppService } from './app.service';

export class DetailEditor<G> {
  private editorStore = new Subject<G>()
  public editor$ = this.editorStore.asObservable();

  private persistStore = new Subject<G>();
  private persist$ = this.persistStore.asObservable();

  constructor(private appService: AppService) { }

  async openEditor(entity: G) {
    this.editorStore.next(entity);  // home component is subscribed to poseEditor$ and will open Editor Dialog

    const persistMe = await this.persist$.pipe(first()).toPromise();

    if (persistMe) {
      if (entity) {
        return this.appService.persistPose(persistMe);
      } else {
        const newPose = await this.appService.createPose(persistMe);
        return newPose;
      }
    } else {
      return null;
    }
  }

  persistEntity(entity: G) {
    this.persistStore.next(entity);
  }
}