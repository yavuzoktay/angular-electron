import { Component, OnInit, OnDestroy } from "@angular/core";
import { timer, Subscription, interval } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  max = 1500;
  counter = 1500;
  current = 0;
  counterDown: Subscription;
  progressDown: Subscription;
  isStartTimer: boolean = false;
  isStartButton: boolean = true;
  timerPause: boolean = false;
  ngOnInit() {}

  start() {
    this.isStartTimer = true;
    this.isStartButton = false;
    this.progressDown = interval(1000).subscribe((x) => this.current++);
    this.counterDown = interval(1000).subscribe((y) => --this.counter);
  }

  pause() {
    this.isStartButton = true;
    this.counterDown.unsubscribe();
    this.progressDown.unsubscribe();
  }

  ngOnDestroy() {}

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
