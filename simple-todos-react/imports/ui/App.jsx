import React from 'react';
import { Task } from './Task.jsx';

const tasks = [
  {_id: 1, text: 'Finish assignment'},
  {_id: 2, text: 'Study for exam'},
  {_id: 3, text: 'attend meeting'},
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
  </div>
);
