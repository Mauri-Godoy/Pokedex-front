import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  private loaderSubscription: Subscription | undefined;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loaderSubscription = this.loadingService.loaderState$.subscribe(
      (state: boolean) => {
        this.isLoading = state;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loaderSubscription) {
      this.loaderSubscription.unsubscribe();
    }
  }
}
