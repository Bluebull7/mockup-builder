import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './style.css';


//Simplified Mantime component list 
const mantineComponents = [
	{ name: 'Button', component: 'Button' },
	{ name: 'List', component: 'List' },
	{ name: 'TextInput', component: 'TextInput' },

const App = () => {
	const [mockComponents, setMockComponents] = React.useState([]);


//Simple Drag and Drop
const MovableItem = ({ name }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
	type: 'item',
	item: { name },
	collect: (monitor) => ({
	   isDragging: !!monitor.isDragging(),
		}),
	}));

const [, drop] = useDrop(() => ({
	accept: 'COMPONENT',
	item: { name },
	collect: (monitor) => ([
	   isDragging: !!monitor.isDragging(),
	}),
   }));
);

// Drag and Drop Logic (You'll need libraries like React DnD)
const componentList = document.getElementById('component-list'); 
const dropzone = document.getElementById('dropzone');


// Component Rendering (Simplified - requires dynamic imports)
function handleDrop(event) {
    const componentName = event.dataTransfer.getData('text'); 

    // Placeholder - Dynamic rendering would go here
    const newElement = document.createElement('div');
    newElement.textContent = `You dropped the ${componentName} component`;
    dropzone.appendChild(newElement); 
}


return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="component-browser" ref={drag}>
           <h2>Mantine Components</h2>
           <ul id="component-list">
             {mantineComponents.map(item => (
                <li key={item.name}>{item.name}</li> 
             ))}
           </ul>
        </div>
        <div className="mockup-area" ref={drop}>
          <h2>Mockup Area</h2>
          {mockupComponents.map(comp => comp.element )} 
        </div>
      </div>
    </DndProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));




export default App;
