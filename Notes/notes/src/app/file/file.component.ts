import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileService } from '../file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, OnDestroy {
  @Input() directory?: string;
  folders?: string[];
  notes?:string[]
  buttonAddCaptin?: string;
  subscription1?: Subscription;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    if (this.directory === "Folders") {
      this.folders = this.fileService.fetchFolders();
      this.buttonAddCaptin = "Add Folder";
    } else if (this.directory ==="Saved Notes") {
      this.notes = this.fileService.fetchNotes();
      this.buttonAddCaptin = "Add Note";
    }

    this.subscription1 = this.fileService.foldersChanged.subscribe(
      (folders: string[]) => {
        this.folders = folders;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
  }

  addItem() {
    if (this.directory === "Folders") {
      this.fileService.addFolder();
    }
  }

}
