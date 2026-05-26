import { Component, input, model } from '@angular/core';
import { DxDraggableModule, type DxDraggableTypes } from 'devextreme-angular/ui/draggable';

export interface NoteInfo {
  id: string;
  task: string;
  assignee: string;
}

@Component({
  selector: 'note',
  imports: [DxDraggableModule],
  templateUrl: './note.component.html',
  styleUrls: ['../app/app.component.scss'],
})
export class NoteComponent {
  id = input<string>();
  group = input<string>('notes');
  boundary = input<string>('.board')
  task = input<string>();
  assignee = input<string>();
  isOverlapped= input<boolean>();
  zIndex = model<number>(0);
  startOverlap = input.required<(id: string) => void>();
  stopOverlap = input.required<() => void>();
  onDragEnd = input<void>();

  overlappedComponentId: string | null = null;
  currentZIndex: number = 0;

  updateZIndex(): void {
    const updatedZIndex = this.zIndex() + 1;
    this.currentZIndex = updatedZIndex;
    this.zIndex.update(() => updatedZIndex);

    console.log(this.currentZIndex)
  }

  handleDragStart(): void {
    this.updateZIndex();
  }

  handleDragMove(e: DxDraggableTypes.DragMoveEvent): void {
    if (e.toComponent !== e.component) {
      const toComponentId = e.toComponent.element().id;
      this.startOverlap()(toComponentId);
      this.overlappedComponentId = toComponentId;
    } else {
      this.stopOverlap()();
      this.overlappedComponentId = null;
    }
  }

  handleDragEnd(): void {
    this.stopOverlap()();
  }

  handleClick(): void {
    this.updateZIndex();
  }
}
