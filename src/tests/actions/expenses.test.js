import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense action ', () => {
  const action = removeExpense({id: '123abs'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abs'
  })
})