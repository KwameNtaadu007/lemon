import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from './pages/ReservationForm';

describe('ReservationForm', () => {
  it('renders the form with input fields and a submit button', () => {
    render(<ReservationForm />);
    
    // Check if the form elements are present
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  it('handles form submission', () => {
    const mockSubmit = jest.fn();
    render(<ReservationForm onSubmit={mockSubmit} />);
    
    // Simulate form submission
    fireEvent.click(screen.getByText('Make Your reservation'));

    // Check if the mockSubmit function is called
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  it('updates state when input fields change', () => {
    render(<ReservationForm />);
    
    // Simulate user input in each field
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: '2023-09-15' },
    });
    fireEvent.change(screen.getByLabelText('Choose time'), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Anniversary' },
    });

    // Check if the input values are updated
    expect(screen.getByLabelText('Choose date')).toHaveValue('2023-09-15');
    expect(screen.getByLabelText('Choose time')).toHaveValue('18:00');
    expect(screen.getByLabelText('Number of guests')).toHaveValue('4');
    expect(screen.getByLabelText('Occasion')).toHaveValue('Anniversary');
  });
});


test('Renders the BookingForm heading', () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})