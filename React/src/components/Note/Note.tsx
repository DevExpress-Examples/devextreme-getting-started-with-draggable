import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
import { type NoteProps } from './Note.types';

function Note({
  id,
  group = 'notes',
  boundary = '.board',
  task,
  assignee,
  isOverlapped,
  zIndex,
  startOverlap,
  stopOverlap,
}: NoteProps) {
  const overlappedComponentId = useRef<string | null>(null);
  const [currentZIndex, setCurrentZIndex] = useState(0);

  const style = useMemo(() => ({ zIndex: currentZIndex }), [currentZIndex]);

  const updateZIndex = useCallback(() => {
    const zIndexToUpdate = zIndex.current + 1;
    setCurrentZIndex(zIndexToUpdate);
    zIndex.current = zIndexToUpdate;
  }, []);

  const handleDragStart = useCallback(() => {
    updateZIndex();
  }, []);

  const handleDragMove = useCallback((e: DraggableTypes.DragMoveEvent) => {
    if (e.toComponent !== e.component) {
      const toComponentId = e.toComponent.element().id;
      startOverlap(toComponentId);
      overlappedComponentId.current = toComponentId;
    } else {
      stopOverlap();
      overlappedComponentId.current = null;
    }
  }, []);

  const onClick = useCallback(() => {
    updateZIndex();
  }, [updateZIndex]);

  const handleDragEnd = useCallback(() => {
    stopOverlap();
  }, []);

  return (
    <Draggable
      id={id}
      group={group}
      boundary={boundary}
      style={style}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <div
        className={`note ${isOverlapped ? 'overlapped' : ''}`}
        onClick={onClick}
      >
        <div className="color-indicator"></div>
        <div className="text-container">
          <div className="body-text-box">{task}</div>
          <div className="detail-text-box">{assignee}</div>
        </div>
      </div>
    </Draggable>
  );
}

export default Note;
