import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';
import { SKILLS } from '../utils/data';

describe('Skills Component', () => {
  test('renders Skills component with correct text', () => {
    render(<Skills />);
    
    // Check if the heading is rendered
    const headingElement = screen.getByText(/Skills/i);
    expect(headingElement).toBeInTheDocument();
    
    // Check if each skill item is rendered
    SKILLS.forEach((skill) => {
      const titleElement = screen.getByText(skill.title);
      expect(titleElement).toBeInTheDocument();
      
      const commentElement = screen.getByText(skill.comment);
      expect(commentElement).toBeInTheDocument();
    });
  });
});