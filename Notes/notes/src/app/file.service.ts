import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  folders_list: string[] = ["Office", "Home"];
  notes_list: string[] = [];
  // folders: string[] = [];
  // notes: string[] = [];

  fetchFolders() {
    return this.folders_list.slice();
  }

  fetchNotes() {
    return this.notes_list.slice();
  }
  // folder_dummy: string[] = ["Office Work", "Home", "Vacation"]
  // notes_dummy: { [note_name: string]: string[] }= {};
  // notes_dummy['Office Work'].push("Presentation");
  constructor() { }
}
