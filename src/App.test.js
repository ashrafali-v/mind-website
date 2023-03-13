import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    const linkElement = screen.getByText(/Whats netbooks?/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('updates on change', () => {
    const setSearch = jest.fn((value) => { })
    render(<App />)
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  })

})