import React from 'react'
import { render } from '@testing-library/react' 
import Greeting from '../src/Greeting'

test('renders greeting', () => {
  const { getByText } = render(<Greeting name='Emmanuel' />)
  expect(getByText(/Emmanuel/)).toBeTruthy()
})