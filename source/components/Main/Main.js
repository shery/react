import React from 'react';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';

function Main() {
  return (
    <div>
      <TodoHeaderContainer />
      <TodoListContainer />
    </div>
  );
}

export default Main;
