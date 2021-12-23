import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  foldersChanged = new Subject<string[]>();
  private folders_list: string[] = ["Office", "Home"];
  private notes_list: string[] = [];

  constructor() { }

  fetchFolders() {
    return this.folders_list.slice();
  }

  fetchNotes() {
    return this.notes_list.slice();
  }

  addFolder() {
    this.folders_list.push("New Folder");
    this.foldersChanged.next(this.folders_list.slice());
  }

  renameFolder(new_name: string, index: number) {
    this.folders_list[index] = new_name;
    this.foldersChanged.next(this.folders_list.slice());
  }

  deleteFolder(index: number) {
    this.folders_list.splice(index, 1);
    this.foldersChanged.next(this.folders_list.slice());
  }

  addNote() {

  }
  // folder_dummy: string[] = ["Office Work", "Home", "Vacation"]
  // notes_dummy: { [note_name: string]: string[] }= {};
  // notes_dummy['Office Work'].push("Presentation");
}
