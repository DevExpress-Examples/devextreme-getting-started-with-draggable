import { Component } from '@angular/core';
import { DxDraggableTypes } from 'devextreme-angular/ui/draggable';
import { on, trigger } from "devextreme/events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  notes = ["#note-1", "#note-2", "#note-3", "#note-4"];

  z = 1;

  changeZIndex(el: HTMLElement) {
    this.z++;
    el.style.zIndex = this.z.toString();
  }

  handleClick(e: any) {
    console.log(e);
    //this.changeZIndex(e.currentTarget.element());
  }

  handleInit(e: any) {
    on(e.element, 'dxclick', this.handleClick);

    on(document.body, 'dxclick', this.handleClick);
    document.body.addEventListener('click', this.handleClick);
  }


  handleDragStart(e: DxDraggableTypes.DragStartEvent) {
    this.changeZIndex(e.element);
 }

  handleDragMove(e: DxDraggableTypes.DragMoveEvent) {
    if (e.toComponent !== e.component) {
      e.toComponent.element().style.outline = '1px dashed red';
    } else {
      this.notes.forEach((el) => { document.querySelector<HTMLElement>(el)?.style.setProperty('outline', ''); });
    }
  }

  handleDragEnd(e: DxDraggableTypes.DragEndEvent) {
    this.notes.forEach((el) => { document.querySelector<HTMLElement>(el)?.style.setProperty('outline', ''); });
  }
}
