import { Component } from '@angular/core';
import { DxDraggableTypes } from 'devextreme-angular/ui/draggable';
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
    this.z++;
    element.style.zIndex = this.z.toString();
  }

  handleClick(e: EventObject) {
    this.changeZIndex(e.currentTarget as HTMLElement);
  }

  handleDragEnter(e: EventObject) {
    const target: HTMLElement = e.target as HTMLElement;

    target.style.outline = "1px dashed red";
  }

  handleDragStop(e: EventObject) {
    const target: HTMLElement = e.target as HTMLElement;

    target.style.outline = "";
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
