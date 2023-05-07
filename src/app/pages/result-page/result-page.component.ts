import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { resultService } from 'src/app/shared/services/result.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, OnDestroy {
  constructor(private resultService: resultService) {}
  result!: string
  subscription!: Subscription
  isResult!: Promise<boolean>
  ngOnInit(): void {
    this.subscription = this.resultService.data$.subscribe((res) => {
      this.result = res;
      this.isResult = Promise.resolve(true);
      
    })
   
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
