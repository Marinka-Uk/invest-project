import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	transactions: {
		expenses: [],
		incomes: [],
	},
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

export default transactionsSlice.reducer
