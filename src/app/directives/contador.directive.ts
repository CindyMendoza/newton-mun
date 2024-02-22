import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { debounceTime, fromEvent, takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Directive({
  selector: '[appContador]',
})
export class ContadorDirective implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();

  @Input()
  countTo!: number;
  @Input() duration: number = 500;
  @Input() easing: string = 'ease-out';
  @Input()
  countInit!: number;

  private counterElement!: HTMLElement;
  private hasAnimated = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.counterElement = this.elementRef.nativeElement;

    // this.initAnimation();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.hasAnimated && this.isInViewport()) {
      this.startCounterAnimation();
      this.hasAnimated = true;
    }
  }

  private isInViewport(): boolean {
    const rect = this.counterElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  private startCounterAnimation(): void {
    const textContent = this.counterElement.textContent;
    const initialValue =
      this.countInit || (textContent ? parseInt(textContent, 10) : 0);

    // const initialValue =
    //   this.countInit || parseInt(this.counterElement.textContent, 10) || 0;
    const delta = this.countTo - initialValue;
    const startTime = Date.now();

    const animationFrame = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / this.duration, 1);
      const easedProgress = this.getEasingFunction(this.easing)(progress);
      const currentValue = initialValue + Math.floor(delta * easedProgress);

      this.counterElement.textContent = currentValue.toString();

      if (elapsedTime < this.duration) {
        requestAnimationFrame(animationFrame);
      }
    };

    requestAnimationFrame(animationFrame);
  }

  private getEasingFunction(easing: string): (progress: number) => number {
    switch (easing) {
      case 'ease-in':
        return (progress) => progress ** 2;
      case 'ease-out':
        return (progress) => 1 - (1 - progress) ** 2;
      case 'ease-in-out':
        return (progress) =>
          progress < 0.5 ? 2 * progress ** 2 : 1 - 2 * (1 - progress) ** 2;
      default:
        return (progress) => progress;
    }
  }
}
