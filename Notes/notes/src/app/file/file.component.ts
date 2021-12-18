import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() directory?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
