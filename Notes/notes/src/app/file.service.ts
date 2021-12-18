import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  mode: string = "Folder";
  folder: string[] = [];
  notes: note[] = [];
  constructor() { }
}
