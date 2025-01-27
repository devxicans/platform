import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { XDevGallery } from '../src';
import '@testing-library/jest-dom';

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
  it('renders the gallery with the correct initial projects', async () => {
    render(<XDevGallery projects={mockProjects} />);

    await waitFor(() => {
      mockProjects.slice(0, 4).forEach((project) => {
        expect(screen.getByText(project.title)).toBeVisible();
        expect(screen.getByText(project.description)).toBeVisible();
      });
    });
  });

  it('displays the correct navigation buttons', async () => {
    render(<XDevGallery projects={mockProjects} />);

    await waitFor(() => {
      expect(screen.queryByText(/Before/i)).not.toBeInTheDocument();
      expect(screen.getByText(/Next/i)).toBeVisible();
    });
  });

  it('navigates to the next set of projects when "Next" is clicked', async () => {
    render(<XDevGallery projects={mockProjects} />);

    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Project 2')).toBeVisible();
      expect(screen.getByText('Project 5')).toBeVisible();
    });

    expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
  });

  it('navigates to the previous set of projects when "Before" is clicked', async () => {
    render(<XDevGallery projects={mockProjects} />);

    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    const beforeButton = screen.getByText(/Before/i);
    fireEvent.click(beforeButton);

    // Wait for the previous projects to appear
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeVisible();
      expect(screen.getByText('Project 4')).toBeVisible();
    });
  });

  it('starts over when clicking "Start Over"', async () => {
    render(<XDevGallery projects={mockProjects} />);

    const nextButton = screen.getByText(/Next/i);
    for (let i = 0; i < mockProjects.length; i++) {
      fireEvent.click(nextButton);
    }

    await waitFor(() => expect(screen.getByText('Project 1')).toBeVisible());
  });

  it('renders the "See more" link only for the current project', async () => {
    render(<XDevGallery projects={mockProjects} />);

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'See more' })).toBeVisible();
    });
  });
});
