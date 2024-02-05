import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Todo from '../Todos/Todo'

describe('Todo Component Tests', () => {
	const sampleTodo = {
		_id: '123',
		text: 'Finish the course',
		done: false,
	}

	it('Renders sample todo', () => {

		render(<Todo todo={sampleTodo} />)

		const todoText = screen.getByText('Finish the course')
		expect(todoText).toBeInTheDocument()
	})

	it('renders a sample todo as not done', () => {

		render(<Todo todo={sampleTodo} />)

		const notDoneText = screen.getByText('This todo is not done')
		expect(notDoneText).toBeInTheDocument()
	})

	it('deletes todo when delete button is clicked', () => {

		const deleteTodoMock = jest.fn()

		render(<Todo todo={sampleTodo} deleteTodo={deleteTodoMock} />)

		const deleteButton = screen.getByText('Delete')
		fireEvent.click(deleteButton)

		expect(deleteTodoMock).toHaveBeenCalledWith(sampleTodo)
	})
})
