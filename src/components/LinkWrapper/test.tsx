import { render, screen } from '@testing-library/react';

import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-page"> Anything </LinkWrapper>);

    const children = screen.getByText(/anything/i);

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-page');
  });
});
