import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FileService } from '../file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, OnDestroy {
  @Input() directory?: string;
  folders: string[] = [];
  notes:string[] = [];
  buttonAddCaptin?: string;
  subscription1?: Subscription;
  displayStyle: string = "none";
  displayStyle2: string = "none";
  index: number = 0;
  renameString: string = "";

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

  onSubmit(form: NgForm) {
    this.closePopup();
    this.fileService.renameFolder(this.renameString, this.index)
  }

  openPopup(index: number) {
    this.index = index;
    this.renameString = this.folders[index];
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  openPopup_delete(index: number) {
    this.index = index;
    this.displayStyle2 = "block";
  }

  closePopup_delete() {
    this.displayStyle2 = "none";
    this.fileService.deleteFolder(this.index);
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
