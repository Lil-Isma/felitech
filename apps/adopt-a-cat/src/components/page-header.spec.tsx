import { render, screen } from '@testing-library/react';
import { PageHeader } from './page-header';

describe('PageHeader', () => {
  it('should render the title', () => {
    const title = 'Test Title';
    render(<PageHeader title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  it('should render children when provided', () => {
    const title = 'Test Title';
    const childText = 'Child Content';

    render(
      <PageHeader title={title}>
        <button>{childText}</button>
      </PageHeader>
    );

    expect(screen.getByText(childText)).toBeTruthy();
    expect(screen.getByRole('button', { name: childText })).toBeTruthy();
  });
});
