import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from '../components/WorkExperience.jsx';
import { WORK_EXPERIENCE } from '../utils/data';

// Mock the WORK_EXPERIENCE data for testing
jest.mock("../utils/data", () => ({
  WORK_EXPERIENCE: [
    {
      company: "xtraz digital UG (haftungsbeschränkt)",
      position: "Online Project Manager",
      duration: "July 2022 - September 2022",
      description: [
        "Introduced and facilitated daily meetings to foster alignment among team members, ensuring efficient collaboration and project progress tracking.",
        "Implemented a specialized task management board in project management software, streamlining workflow and enhancing team productivity.",
        "Communicated with stakeholders to ensure alignment with project objectives and service delivery.",
      ]
    }
  ]
}));

describe("WorkExperience Component", () => {
  test("renders the description for each WorkExperienceCard", () => {
    render(<WorkExperience />);

    // Check that each description text is rendered by iterating over the array of descriptions
    const descriptions = [
      "Introduced and facilitated daily meetings to foster alignment among team members, ensuring efficient collaboration and project progress tracking.",
      "Implemented a specialized task management board in project management software, streamlining workflow and enhancing team productivity.",
      "Communicated with stakeholders to ensure alignment with project objectives and service delivery."
    ];

    descriptions.forEach((desc) => {
      // Use a function to check if the description text is in the document
      const descriptionElement = screen.getByText((content, element) => 
        element.tagName.toLowerCase() === 'p' && content.includes(desc)
      );
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});