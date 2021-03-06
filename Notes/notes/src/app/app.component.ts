import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  folder = "Folders";
  notes = "Saved Notes";

  constructor(private elementRef: ElementRef){ }

  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#E4F9F5';
  }
}
