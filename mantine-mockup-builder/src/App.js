import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const MovableItem = ({ name }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'item',
		item: { name },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div ref={drag} style = {{borderL '1px solid black', margin: '5px', opacity: isDragging ? 0.5 : 1}}>
			{name}
		</div>
	      );
	};
ReactDOM.render(
	<DndProvider backend={HTML5Backend}>
		<MovableItem name="Component 1" />
	</DndProvider>,
	document.getElementById('root')
);

// Drag and Drop Logic (You'll need libraries like React DnD)
const componentList = document.getElementById('component-list'); 
const dropzone = document.getElementById('dropzone');

// ... add drag start, drag over, and drop event listeners

// Component Rendering (Simplified - requires dynamic imports)
function handleDrop(event) {
    const componentName = event.dataTransfer.getData('text'); 

    // Placeholder - Dynamic rendering would go here
    const newElement = document.createElement('div');
    newElement.textContent = `You dropped the ${componentName} component`;
    dropzone.appendChild(newElement); 
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
