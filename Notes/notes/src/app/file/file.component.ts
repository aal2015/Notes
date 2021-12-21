import { Component, OnInit, Input } from '@angular/core';

import { FileService } from '../file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() directory?: string;
  items?: string[];
  buttonAddCaptin?: string;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    if (this.directory === "Folders") {
      this.items = this.fileService.fetchFolders();
      this.buttonAddCaptin = "Add Folder";
    } else if (this.directory ==="Saved Notes") {
      this.items = this.fileService.fetchNotes();
      this.buttonAddCaptin = "Add Note";
    }
  }

  addItem() {
    if (this.directory === "Folders") {
      this.fileService.addFolder();
    }
  }

}
