import { useCallback, useRef, useState } from 'react';
import Note from './components/Note/Note.tsx';
import { type NoteInfo } from './components/Note/Note.types.tsx';

import 'devextreme/dist/css/dx.fluent.blue.light.css';
import './App.css';

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

function App(): JSX.Element {
  const zIndex = useRef(0);
  const [overlappedId, setOverlappedId] = useState<string | null>(null);

  const startOverlap = useCallback((id: string) => {
    setOverlappedId(id);
  }, []);

  const stopOverlap = useCallback(() => {
    setOverlappedId(null);
  }, []);

  const handleDragEnd = useCallback(() => {
    setOverlappedId(null);
  }, []);

  return (
    <div className="demo-container dx-theme-fluent-typography">
      <div className="boundary-text">Dragging Boundary</div>
      <div className="board">
        {notes.map((note) => (
          <Note
            {...note}
            key={note.id}
            isOverlapped={overlappedId === note.id}
            zIndex={zIndex}
            startOverlap={startOverlap}
            stopOverlap={stopOverlap}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
      <div className="boundary-text">Dragging Boundary</div>
    </div>
  );
}

export default App;
