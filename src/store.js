import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './services/reducers/todosReducer';

// Fetch
const store = createStore(todosReducer, applyMiddleware(thunk));

// Counter
// import counterReducer from './services/reducers/counterReducer';
// const store = createStore(counterReducer);

export default store;
