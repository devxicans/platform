import { render, screen, fireEvent } from '@testing-library/react'
import { XDevGallery } from '../src'
import '@testing-library/jest-dom'

interface Project {
  id: number,
  title: string,
  description: string
}

const mockProjects: Project[] = [
  { id: 0, title: 'Project 1', description: 'Description 1' },
  { id: 1, title: 'Project 2', description: 'Description 2' },
  { id: 2, title: 'Project 3', description: 'Description 3' },
  { id: 3, title: 'Project 4', description: 'Description 4' },
  { id: 4, title: 'Project 5', description: 'Description 5' },
];

describe('<XDevGallery />', () => {
  it('renders the gallery with the correct initial projects', () => {
    render(<XDevGallery projects={mockProjects} />);

    mockProjects.slice(0, 4).forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('displays the correct navigation buttons', () => {
    render(<XDevGallery projects={mockProjects} />);

    expect(screen.queryByText(/Before/i)).not.toBeInTheDocument();

    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });

  it('navigates to the next set of projects when "Next" is clicked', () => {
    render(<XDevGallery projects={mockProjects} />);

    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Project 5')).toBeInTheDocument();
    expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
  });

  it('navigates to the previous set of projects when "Before" is clicked', () => {
    render(<XDevGallery projects={mockProjects} />);

    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    const beforeButton = screen.getByText(/Before/i);
    fireEvent.click(beforeButton);

    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 4')).toBeInTheDocument();
  });

  it('starts over when clicking "Start Over"', () => {
    render(<XDevGallery projects={mockProjects} />);

    const nextButton = screen.getByText(/Next/i);
    for (let i = 0; i < mockProjects.length; i++) {
      fireEvent.click(nextButton);
    }

    expect(screen.getByText('Project 1')).toBeInTheDocument();
  });

  it('renders the "See more" link only for the current project', () => {
    render(<XDevGallery projects={mockProjects} />);

    expect(screen.getByRole('link', { name: 'See more' })).toBeInTheDocument();
  });
});
