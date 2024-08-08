import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public loaderState$: Observable<boolean> = this.loaderSubject.asObservable();

  constructor() { }

  showLoader(): void {
    this.loaderSubject.next(true);
  }

  hideLoader(): void {
    this.loaderSubject.next(false);
  }
}
