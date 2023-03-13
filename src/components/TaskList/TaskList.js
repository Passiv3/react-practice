import React from 'react';

import Task from './Task';
import './TaskList.css';

const TaskList = prop =>{
    return (
        <React.Fragment className = 'task-list'>
            <h2>Tasks</h2>
            <Task />
        </React.Fragment>
        );
};

export default TaskList;