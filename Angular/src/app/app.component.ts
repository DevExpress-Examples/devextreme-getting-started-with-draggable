import { Component } from '@angular/core';
import { type DxDraggableTypes } from 'devextreme-angular/ui/draggable';
import { EventObject } from 'devextreme/common/core/events';
import { on } from "devextreme/events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  z = 1;

  changeZIndex(element: HTMLElement) {
    element.style.zIndex = this.z.toString();
    this.z++;
  }

  handleClick(e: EventObject) {
    this.changeZIndex(e.currentTarget as HTMLElement);
  }

  handleDragEnter(e: EventObject) {
    const target: HTMLElement = e.target as HTMLElement;

    target.classList.add('overlapped');
  }

  handleDragStop(e: EventObject) {
    const target: HTMLElement = e.target as HTMLElement;

    target.classList.remove('overlapped');
  }

  handleInit(e: DxDraggableTypes.InitializedEvent) {
    on(e.element!, 'click', this.handleClick.bind(this));

    on(e.element!, 'dxdragenter', this.handleDragEnter);

    on(e.element!, 'dxdragleave', this.handleDragStop);
    on(e.element!, 'dxdrop', this.handleDragStop);
  }

  handleDragStart(e: DxDraggableTypes.DragStartEvent) {
    this.changeZIndex(e.element);
  }
}
