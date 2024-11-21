import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../components/AboutMe.jsx';

describe("AboutMe Component", () => {
  test("renders AboutMe component with correct text", () => {
    render(<AboutMe />);

    // Check if the heading is rendered
    const headingElement = screen.getByText(/About Me/i);
    expect(headingElement).toBeInTheDocument();

    // Check if the heading has the correct class
    expect(headingElement).toHaveClass(
      "text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14"
    );
  });
});