import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  folders_list: string[] = ["Office", "Home"];
  notes_list: string[] = [];
  // folders: string[] = [];
  // notes: string[] = [];
  constructor() { }

  fetchFolders() {
    return this.folders_list.slice();
  }

  fetchNotes() {
    return this.notes_list.slice();
  }

  addFolder() {
    this.folders_list.push("New Folder");
    console.log("added");

  }

  addNote() {

  }
  // folder_dummy: string[] = ["Office Work", "Home", "Vacation"]
  // notes_dummy: { [note_name: string]: string[] }= {};
  // notes_dummy['Office Work'].push("Presentation");
}
