import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Component', () => {
  test('renders App component with main sections', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Check if the NavBar is rendered
    const navBarElement = screen.getByRole("navigation");
    expect(navBarElement).toBeInTheDocument();

    // Refine Hero section check
    const heroElement = screen.getByText(/Linh Nguyen 🦉/i);
    expect(heroElement).toBeInTheDocument();

    // Check if the Skills section is rendered by looking for the heading
    const skillsElement = screen.getByRole('heading', { name: /Skills/i });
    expect(skillsElement).toBeInTheDocument();

    // Check if the Work Experience section is rendered by looking for the heading
    const workExperienceElement = screen.getByRole('heading', { name: /Work Experience/i });
    expect(workExperienceElement).toBeInTheDocument();

    // Check if the About Me section is rendered by looking for the heading
    const aboutMeElement = screen.getByRole('heading', { name: /About Me/i });
    expect(aboutMeElement).toBeInTheDocument();

    // Check if the Contact section is rendered by looking for the heading
    const contactElement = screen.getByRole('heading', { name: /Contact Me/i });
    expect(contactElement).toBeInTheDocument();

    // Check if the Footer is rendered by looking for the footer text
    const footerElement = screen.getByText(/Made with 🩷!/i);
    expect(footerElement).toBeInTheDocument();
  });
});