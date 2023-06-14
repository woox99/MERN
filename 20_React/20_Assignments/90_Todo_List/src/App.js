import React, { useState } from 'react';
import './App.css'
// import DisplayMsg from './components/DisplayMsg';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var item = {
      task:task,
      isComplete:0
    }
    setList([...list, item]);
    setTask('');
  }

  const handleComplete = (index) => {
    const updatedList = [...list];
    if(list[index].isComplete == 0){
      updatedList[index].isComplete = 1;
    }
    else{
      updatedList[index].isComplete = 0
    }
    setList(updatedList);
  }

  const handleDelete = (index) => {
    setList(list.filter( (listItem, itemIndex) => itemIndex != index ));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} placeholder='Add task to list.' onChange={(e) => setTask(e.target.value)} />
        <input type="submit" value='Add' />
      </form>
      <div className='list'>
      {
        list.map((item, index) =>
          <div className='item' key={index}>
            <label className={ item.isComplete ? 'completed' : '' }>{item.task}</label>
            <input type="checkbox" onClick={ () => handleComplete(index) }/>
            <button onClick={ () => handleDelete(index) }>Delete</button>
          </div>
        )
      }
      </div>
    </div>
  );
}

export default App;
