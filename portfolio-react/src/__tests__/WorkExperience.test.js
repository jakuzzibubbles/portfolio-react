import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from '../components/WorkExperience.jsx';
import { WORK_EXPERIENCE } from '../utils/data';

describe('WorkExperience Component', () => {
  test('renders WorkExperience component with correct text', () => {
    render(<WorkExperience />);
    
    // Check if the heading is rendered
    const headingElement = screen.getByText(/Work Experience/i);
    expect(headingElement).toBeInTheDocument();
    
    // Check if each work experience item is rendered
    WORK_EXPERIENCE.forEach((item) => {
      const companyElement = screen.getByText(item.company);
      expect(companyElement).toBeInTheDocument();
      
      const positionElement = screen.getByText(item.position);
      expect(positionElement).toBeInTheDocument();
      
      const durationElement = screen.getByText(item.duration);
      expect(durationElement).toBeInTheDocument();
      
      const descriptionElement = screen.getByText((content, element) => {
        const hasText = (node) => node.textContent === item.description;
        const nodeHasText = hasText(element);
        const childrenDontHaveText = Array.from(element.children).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      });
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});