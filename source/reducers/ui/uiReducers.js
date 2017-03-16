import { handleActions } from 'redux-actions';
import UiState from '../../constants/models.js';

export default handleActions({
  SHOW: (state, { payload }) => (
    state.set('todos', payload)
  )
}, UiState);
