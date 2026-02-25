import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	transactions: {
		expenses: [],
		incomes: [],
	},
	isLoading: false,
  error: null,
}

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		addExpenses(state, action) {
			state.transactions.expenses.push(action.payload)
		},

		deleteExpenses(state, action) {
			state.transactions.expenses = state.transactions.expenses.filter(
				item => item.id !== action.payload,
			)
		},addIncomes(state, action) {
			state.transactions.incomes.push(action.payload)
		},

		deleteIncomes(state, action) {
			state.transactions.incomes = state.transactions.incomes.filter(
				item => item.id !== action.payload,
			)
		}
	},
	
})

export const { addIncomes, deleteIncomes, addExpenses, deleteExpenses } = transactionsSlice.actions




export const selectIncomes = (state) => state.transactions.transactions.incomes;
export const selectExpenses = (state) => state.transactions.transactions.expenses;

export const selectBalance = (state) => {
  const incomes = selectIncomes(state);
  const expenses = selectExpenses(state);

  const totalIncome = incomes.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const totalExpense = expenses.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  return totalIncome - totalExpense;
};


export default transactionsSlice.reducer
