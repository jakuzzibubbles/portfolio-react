import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero.jsx';
import { PROFILE_DATA } from '../utils/data';

describe("Hero Component", () => {
  test("renders Hero component with profile data", () => {
    render(<Hero />);

    // Check if the name is rendered
    const nameElement = screen.getByText(PROFILE_DATA.name);
    expect(nameElement).toBeInTheDocument();

    // Check if the job title is rendered
    const jobTitleElement = screen.getByText(PROFILE_DATA.jobTitle);
    expect(jobTitleElement).toBeInTheDocument();

    // Check if the location is rendered
    const locationElement = screen.getByText(PROFILE_DATA.location);
    expect(locationElement).toBeInTheDocument();

    // Check if the email is rendered
    const emailElement = screen.getByText(PROFILE_DATA.email);
    expect(emailElement).toBeInTheDocument();

    // Check if the years of experience is rendered
    const experienceElement = screen.getByText(
      `${PROFILE_DATA.yearsOfExperience} Years of Experience`
    );
    expect(experienceElement).toBeInTheDocument();

    // Check if the GitHub link is rendered
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", PROFILE_DATA.githubUrl);

    // Check if the LinkedIn link is rendered
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("href", PROFILE_DATA.linkedinUrl);
  });
});