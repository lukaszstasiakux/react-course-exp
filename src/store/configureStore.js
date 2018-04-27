import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose; 
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
      auth: authReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  )
  return store;
}

