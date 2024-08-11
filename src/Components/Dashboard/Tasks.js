import React, { useState } from 'react';
import dots from '../../assets/Images/Icons/dots.svg';
import placeholder from '../../assets/Images/placeholder.svg';
import user from '../../assets/Images/Icons/user.svg';
import plus from '../../assets/Images/task-box-icons/plus.svg';
import calendar from '../../assets/Images/task-box-icons/calendar.svg';
import pin from '../../assets/Images/task-box-icons/pin.svg';
import flag from '../../assets/Images/task-box-icons/flag.svg';

const TaskColumn = ({ title, tasks, addNewTask }) => {
  return (
    <div className="column">
      <div className="firstline">
        <h3>{title}</h3>
        <img src={dots} alt="" />
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="box">
          <h3>{task.category}</h3>
          <h4>{task.description}</h4>
          {task.image && (
            <div className="img">
              <img src={placeholder} alt="" />
            </div>
          )}
          <div className="usericons">
            {task.users.map((userIcon, index) => (
              <a key={index} href="#"><img src={userIcon} alt="" /></a>
            ))}
          </div>
          <div className="bottomicons">
            <div className="left">
              <img src={plus} alt="" />
              <img src={calendar} alt="" />
              <img src={pin} alt="" />
              <img src={flag} alt="" />
            </div>
            <div className="right">
              <img src={dots} alt="" />
            </div>
          </div>
        </div>
      ))}

      <div className="newtask" onClick={addNewTask}>
        <img src={plus} alt="" /> <p> New Task </p>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [columns, setColumns] = useState([
    {
      title: 'In Progress',
      tasks: [
        {
          category: 'Category',
          description: 'Description Top',
          image: true,
          users: [user, user, user, user],
        },
        {
          category: 'Category',
          description: 'Description Top',
          image: true,
          users: [user, user, user, user],
        },
        
      ],
    },
    {
      title: 'Title',
      tasks: [
        {
          category: 'Category',
          description: 'Description Top',
          image: false,
          users: [user, user, user, user],
        },
        {
          category: 'Category',
          description: 'Description Top',
          image: true,
          users: [user, user, user, user],
        },
        {
          category: 'Category',
          description: 'Description Top',
          image: false,
          users: [user, user, user, user],
        },
        {
          category: 'Category',
          description: 'Description Top',
          image: false,
          users: [user, user, user, user],
        },
      ],
    },
    {
      title: 'Completed',
      tasks: [
        {
          category: 'Category',
          description: 'Description Top',
          image: false,
          users: [user, user, user, user],
        },
        {
          category: 'Category',
          description: 'Description Top',
          image: false,
          users: [user, user, user, user],
        },
        {
          category: 'Category',
          description: 'Description Top',
          image: true,
          users: [user, user, user, user],
        },
      ],
    },
  ]);

  const addNewTask = (columnIndex) => {
    const newTask = {
      category: 'Category',
      description: 'Task Description',
      image: true,
      users: [user, user, user, user],
    };

    setColumns(prevColumns => 
      prevColumns.map((column, index) => 
        index == columnIndex
          ? { ...column, tasks: [...column.tasks, newTask] }
          : column
      )
    );
  };

  return (
    <div className="taskrow">
      {columns.map((column, index) => (
        <TaskColumn 
          key={index} 
          title={column.title} 
          tasks={column.tasks} 
          addNewTask={() => addNewTask(index)} 
        />
      ))}
    </div>
  );
};

export default Tasks;
