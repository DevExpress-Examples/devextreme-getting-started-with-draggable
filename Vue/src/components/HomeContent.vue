<template>
  <div class="boundary-text">Dragging Boundary</div>
  <div class="board">
    <template
      v-for="note in notes"
      :key="note.id"
    >
      <Note
        :id="note.id"
        :task="note.task"
        :assignee="note.assignee"
        :is-overlapped="overlappedId === note.id"
        v-model:z-index="zIndex"
        :start-overlap="startOverlap"
        :stop-overlap="stopOverlap"
      />
    </template>
  </div>
  <div class="boundary-text">Dragging Boundary</div>
</template>

<script setup lang="ts">
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import Note, { type NoteInfo } from './Note.vue';
import { ref } from 'vue';

const notes: NoteInfo[] = [
  {
    id: 'note-1',
    task: 'Install New Router in Dev Room',
    assignee: 'Amelia Harper',
  },
  {
    id: 'note-2',
    task: '👨‍💻 Launch New Website',
    assignee: 'Brett Wade',
  },
  {
    id: 'note-3',
    task: 'Prepare 2026 Marketing Plan',
    assignee: 'Robert Reagan',
  },
  {
    id: 'note-4',
    task: '🖥️ Approve Personal Computer Upgrade Plan',
    assignee: 'Bart Arnaz',
  },
];

const overlappedId = ref<string | null>(null);
const zIndex = ref<number>(0);

function startOverlap(id: string) {
  overlappedId.value = id;
}

function stopOverlap() {
  overlappedId.value = null;
}
</script>
