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
		addTransaction(state, action) {
			state.transactions.expenses.push(action.payload)
		},

		deleteTransaction(state, action) {
			state.transactions.expenses = state.transactions.expenses.filter(
				item => item.id !== action.payload,
			)
		},
	},
})

export const { addTransaction, deleteTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer
