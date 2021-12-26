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
  folder_select_status: boolean[] = [];
  current_selected_folder: number = -1;
  displayStyle: string = "none";
  displayStyle2: string = "none";
  renameString: string = "";

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    if (this.directory === "Folders") {
      this.folders = this.fileService.fetchFolders();
      this.buttonAddCaptin = "Add Folder";
      for (var i = 0; i < this.folders.length; i++) {
        this.folder_select_status.push(false);
      }
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
    this.fileService.renameFolder(this.renameString, this.current_selected_folder)
  }

  openPopup(index: number) {
    this.renameString = this.folders[index];
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  openPopup_delete() {
    this.displayStyle2 = "block";
  }

  closePopup_delete(remove: boolean) {
    console.log(this.current_selected_folder);
    this.displayStyle2 = "none";
    if (remove) {
      this.folder_select_status.splice(this.current_selected_folder, 1);
      this.fileService.deleteFolder(this.current_selected_folder);
    }
  }

  select_folder(index: number) {
    if (this.current_selected_folder != -1) {
      this.folder_select_status[this.current_selected_folder] = false;
    }
    this.folder_select_status[index] = true;
    this.current_selected_folder = index;
  }

  ngOnDestroy() {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
  }

  addItem() {
    if (this.directory === "Folders") {
      this.fileService.addFolder();
      this.folder_select_status.push(false);
    }
  }

}
