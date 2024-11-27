import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import { PROFILE_DATA } from '../utils/data';

// Mock axiosInstance to avoid relying on import.meta.env during testing
jest.mock("../utils/axiosInstance", () => ({
  post: jest.fn(() => Promise.resolve({ data: { message: "Success" } })),
}));

describe('Contact Component', () => {
  test('renders Contact component with correct text', () => {
    render(<Contact />);
    
    // Check if the heading is rendered
    const headingElement = screen.getByText(/Contact Me/i);
    expect(headingElement).toBeInTheDocument();
    
    // Check if the email is rendered
    const emailElement = screen.getByText(PROFILE_DATA.email);
    expect(emailElement).toBeInTheDocument();
    
    // Check if the phone number is rendered (if applicable)
    if (PROFILE_DATA.phone) {
      const phoneElement = screen.getByText(PROFILE_DATA.phone);
      expect(phoneElement).toBeInTheDocument();
    }
  });
});