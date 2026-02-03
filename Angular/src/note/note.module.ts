import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDraggableModule } from 'devextreme-angular/ui/draggable';
import { NoteComponent } from './note.component';

@NgModule({
  declarations: [
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    DxDraggableModule,
  ],
  exports: [
    NoteComponent,
  ],
  providers: [],
  bootstrap: [NoteComponent],
})
export class NoteModule { }
