const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
  switch (action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
    //filter sprawdza cala tablice element po elemencie i zwraca tablice elementow ktore nie spelniaja warunku tj, wszystkie elemety ktorego nei maja tego idika
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    case 'SET_EXPENSES':
      return action.expenses;
      
    default:
      return state;
  }
};
