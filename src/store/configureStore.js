import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose; 
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store;
}

