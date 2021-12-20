import { Component, OnInit, Input } from '@angular/core';

import { FileService } from '../file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() directory?: string;
  fetched?: string[];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    if (this.directory === "Folders") {
      this.fetched = this.fileService.fetchFolders();
    } else if (this.directory ==="Saved Notes") {
      this.fetched = this.fileService.fetchNotes();
    }
  }

}
