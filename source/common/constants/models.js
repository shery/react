import Immutable from 'immutable';

// export const TodoState = Immutable.fromJS({
//   todos: [],
//   todo: {
//     id: '',
//     text: '',
//     updatedAt: '',
//     completed: false
//   }
// });

export const UiState = Immutable.fromJS({
  spinnerVisible: false
});

export const GithubState = Immutable.fromJS({
  userId: '',
  data: {}
});
