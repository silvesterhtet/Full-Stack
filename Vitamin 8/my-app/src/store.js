import { createStore } from 'redux';

const initialState = {
  tasks: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'Delete':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

export const addTask = (task) => ({
    type: 'Add',
    payload: task
  });
  
  export const deleteTask = (taskId) => ({
    type: 'Delete',
    payload: taskId
  });