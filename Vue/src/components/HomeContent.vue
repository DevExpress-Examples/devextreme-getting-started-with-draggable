<template>
  <div class="boundary-text">Dragging Boundary</div>
  <div class="board">
    <DxDraggable
      id="note-1"
      group="cards"
      class="card"
      boundary=".board"
      @initialized="handleInit"
      @drag-start="handleDragStart"
    >
      <div class="color-indicator blue"></div>
      <div class="text-container">
        <div class="body-text-box">Install New Router in Dev Room</div>
        <div class="detail-text-box">Amelia Harper</div>
      </div>
    </DxDraggable>

    <DxDraggable
      id="note-2"
      group="cards"
      class="card"
      boundary=".board"
      @initialized="handleInit"
      @drag-start="handleDragStart"
    >
      <div class="color-indicator green"></div>
      <div class="text-container">
        <div class="body-text-box">👨‍💻 Launch New Website</div>
        <div class="detail-text-box">Brett Wade</div>
      </div>
    </DxDraggable>

    <DxDraggable
      id="note-3"
      group="cards"
      class="card"
      boundary=".board"
      @initialized="handleInit"
      @drag-start="handleDragStart"
    >
      <div class="color-indicator red"></div>
      <div class="text-container">
        <div class="body-text-box">Prepare 2026 Marketing Plan</div>
        <div class="detail-text-box">Robert Reagan</div>
      </div>
    </DxDraggable>

    <DxDraggable
      id="note-4"
      group="cards"
      class="card"
      boundary=".board"
      @initialized="handleInit"
      @drag-start="handleDragStart"
    >
      <div class="color-indicator yellow"></div>
      <div class="text-container">
        <div class="body-text-box">🖥️ Approve Personal Computer Upgrade Plan</div>
        <div class="detail-text-box">Bart Arnaz</div>
      </div>
    </DxDraggable>
  </div>
  <div class="boundary-text">Dragging Boundary</div>
</template>

<script setup lang="ts">
import "devextreme/dist/css/dx.fluent.blue.light.css";
import { DxDraggable, type DxDraggableTypes } from "devextreme-vue/draggable";
import { on } from "devextreme/events";
import { type EventObject } from "devextreme/common/core/events";

let z = 1;

function changeZIndex(element: HTMLElement) {
  element.style.zIndex = z.toString();
  z++;
}

function handleClick(e: EventObject) {
  changeZIndex(e.currentTarget as HTMLElement);
}

function handleDragEnter(e: EventObject) {
  const target: HTMLElement = e.target as HTMLElement;

  target.classList.add('overlapped');
}

function handleDragStop(e: EventObject) {
  const target: HTMLElement = e.target as HTMLElement;

  target.classList.remove('overlapped');
}

function handleInit(e: DxDraggableTypes.InitializedEvent) {
  on(e.element!, "click", handleClick);

  on(e.element!, "dxdragenter", handleDragEnter);

  on(e.element!, "dxdragleave", handleDragStop);
  on(e.element!, "dxdrop", handleDragStop);
}

function handleDragStart(e: DxDraggableTypes.DragStartEvent) {
  changeZIndex(e.element);
}
</script>
