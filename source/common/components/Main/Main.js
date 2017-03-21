// import React from 'react';
// import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
// import TodoListContainer from '../../containers/TodoListContainer';
//
// const Main = () => (
//   <div>
//     <TodoHeaderContainer />
//     <TodoListContainer />
//   </div>
// );
//
// export default Main;

import React from 'react';
import AppBar from 'material-ui/AppBar';

const Main = props => (
  <div>
    <AppBar
      title="Github Finder"
      showMenuIconButton={false}
    />
  </div>
);

export default Main;
