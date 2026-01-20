export interface NoteInfo {
  id: string;
  task: string;
  assignee: string;
}

export interface NoteProps extends NoteInfo {
  group?: string;
  boundary?: string;
  isOverlapped: boolean;
  zIndex: React.MutableRefObject<number>;
  startOverlap(id: string): void;
  stopOverlap(id: string): void;
  onDragEnd(): void;
}
