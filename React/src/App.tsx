import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
import { on } from 'devextreme/common/core/events';
import { type EventObject } from 'devextreme/common/core/events';

function App(): JSX.Element {
  const [, setZ] = useState(1);

  const changeZIndex = useCallback((element: HTMLElement) => {
    setZ((prevValue) => {
      element.style.zIndex = prevValue.toString();
      return prevValue + 1;
    });
  }, []);

  const handleClick = useCallback((e: EventObject) => {
    changeZIndex(e.currentTarget as HTMLElement);
  }, []);

  const handleDragEnter = useCallback((e: EventObject) => {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add('overlapped');
  }, []);

  const handleDragStop = useCallback((e: EventObject) => {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove('overlapped');
  }, []);

  const handleInit = useCallback((e: DraggableTypes.InitializedEvent) => {
    on(e.element!, 'click', handleClick);
    on(e.element!, 'dxdragenter', handleDragEnter);
    on(e.element!, 'dxdragleave', handleDragStop);
    on(e.element!, 'dxdrop', handleDragStop);
  }, []);

  const handleDragStart = useCallback((e: DraggableTypes.DragStartEvent) => {
    changeZIndex(e.element);
  }, []);

  return (
    <div className="demo-container dx-theme-fluent-typography">
      <div className="boundary-text">Dragging Boundary</div>
      <div className="board">
        <Draggable
          id="note-1"
          group="cards"
          className="card"
          boundary=".board"
          onInitialized={handleInit}
          onDragStart={handleDragStart}
        >
          <div className="color-indicator blue"></div>
          <div className="text-container">
            <div className="body-text-box">Install New Router in Dev Room</div>
            <div className="detail-text-box">Amelia Harper</div>
          </div>
        </Draggable>

        <Draggable
          id="note-2"
          group="cards"
          className="card"
          boundary=".board"
          onInitialized={handleInit}
          onDragStart={handleDragStart}
        >
          <div className="color-indicator green"></div>
          <div className="text-container">
            <div className="body-text-box">Launch New Website</div>
            <div className="detail-text-box">Brett Wade</div>
          </div>
        </Draggable>

        <Draggable
          id="note-3"
          group="cards"
          className="card"
          boundary=".board"
          onInitialized={handleInit}
          onDragStart={handleDragStart}
        >
          <div className="color-indicator red"></div>
          <div className="text-container">
            <div className="body-text-box">Prepare 2026 Marketing Plan</div>
            <div className="detail-text-box">Robert Reagan</div>
          </div>
        </Draggable>

        <Draggable
          id="note-4"
          group="cards"
          className="card"
          boundary=".board"
          onInitialized={handleInit}
          onDragStart={handleDragStart}
        >
          <div className="color-indicator yellow"></div>
          <div className="text-container">
            <div className="body-text-box">
              Approve Personal Computer Upgrade Plan
            </div>
            <div className="detail-text-box">Bart Arnaz</div>
          </div>
        </Draggable>
      </div>
      <div className="boundary-text">Dragging Boundary</div>
    </div>
  );
}

export default App;
