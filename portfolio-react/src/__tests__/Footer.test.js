import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders Footer component with correct text', () => {
    render(<Footer />);
    
    // Check if the footer text is rendered
    const footerText = screen.getByText(/Made with 🩷!/i);
    expect(footerText).toBeInTheDocument();
  });
});