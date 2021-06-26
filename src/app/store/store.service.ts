import { initialState, State } from './state';
import { Injectable } from '@angular/core';

import { distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject, queueScheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Store {

  private state$ = new BehaviorSubject<State>(initialState);


  update(fn: (state: State) => State): void {
    const current = this.state$.value;
    queueScheduler.schedule(() => {
      this.state$.next(fn(current));
    });
  }

  select<T>(selector: (state: State) => T): any {
    return this.state$.pipe(
      map(selector),
      distinctUntilChanged(),
    );
  }


  constructor() { }
}
