import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NoteComponent, type NoteInfo } from 'src/note/note.component';

@Component({
  selector: 'app-root',
  imports: [NoteComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  notes: NoteInfo[] = [
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

  zIndex: number = 0;
  overlappedId: string | null = null;

  startOverlap: (id: string) => void = (id) => {
    this.overlappedId = id;
  }

  stopOverlap: () => void = () => {
    this.overlappedId = null;
  }

  handleDragEnd: () => void = () => {
    this.stopOverlap();
  }
}
