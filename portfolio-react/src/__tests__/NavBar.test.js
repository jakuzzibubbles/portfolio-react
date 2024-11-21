import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the MobileNavbar component
jest.mock('../components/MobileNavbar.jsx', () => () => <div data-testid="mobile-navbar">Mobile Navbar</div>);

describe('NavBar Component', () => {
  test('renders NavBar component with menu items', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Check if the menu items are rendered
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const skillsLink = screen.getByText(/Skills/i);
    expect(skillsLink).toBeInTheDocument();

    const experienceLink = screen.getByText(/Work Experience/i);
    expect(experienceLink).toBeInTheDocument();

    const aboutLink = screen.getByText(/About Me/i);
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
  });

  test('toggles mobile menu when button is clicked', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Check if the mobile menu button is rendered
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();

    // Click the menu button to open the mobile menu
    fireEvent.click(menuButton);

    // Check if the mobile menu is rendered
    const mobileMenu = screen.getByTestId('mobile-navbar');
    expect(mobileMenu).toBeInTheDocument();

    // Click the menu button to close the mobile menu
    fireEvent.click(menuButton);

    // Check if the mobile menu is not rendered
    expect(mobileMenu).not.toBeInTheDocument();
  });
});