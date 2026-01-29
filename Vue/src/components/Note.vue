<template>
    <DxDraggable
        :id="id"
        :group="group"
        :boundary="boundary"
        :style="{zIndex: currentZIndex}"
        @drag-start="handleDragStart"
        @drag-move="handleDragMove"
        @drag-end="handleDragEnd"
    >
        <div :class="`note ${isOverlapped ? 'overlapped' : ''}`" @click="handleClick">
            <div class="color-indicator"></div>
            <div class="text-container">
                <div class="body-text-box">{{ task }}</div>
                <div class="detail-text-box">{{ assignee }}</div>
            </div>
        </div>
    </DxDraggable>
</template>

<script setup lang="ts">
import "devextreme/dist/css/dx.fluent.blue.light.css";
import { DxDraggable, type DxDraggableTypes } from "devextreme-vue/draggable";
import { ref } from "vue";

export interface NoteInfo {
    id: string;
    task: string;
    assignee: string;
}

interface NoteProps extends NoteInfo {
    group?: string;
    boundary?: string;
    isOverlapped: boolean;
    zIndex: number;
    startOverlap(id: string): void;
    stopOverlap(): void;
}

const {
    id,
    group = 'notes',
    boundary = '.board',
    task,
    assignee,
    isOverlapped,
    startOverlap,
    stopOverlap,
} = defineProps<NoteProps>()

const zIndex = defineModel<number>('zIndex', { default: 0 })

const overlappedComponentId = ref<string | null>(null);
const currentZIndex = ref<number>(0);

function updateZIndex() {
    const zIndexToUpdate = zIndex.value + 1;
    currentZIndex.value = zIndexToUpdate;
    zIndex.value = zIndexToUpdate;
}

function handleDragStart() {
    updateZIndex();
}

function handleDragMove(e: DxDraggableTypes.DragMoveEvent) {
    if (e.toComponent !== e.component) {
        const toComponentId = e.toComponent.element().id;
        startOverlap(toComponentId);
        overlappedComponentId.value = toComponentId;
    } else {
        stopOverlap();
        overlappedComponentId.value = null;
    }
}

function handleDragEnd() {
    stopOverlap();
}

function handleClick() {
    updateZIndex();
}
</script>
