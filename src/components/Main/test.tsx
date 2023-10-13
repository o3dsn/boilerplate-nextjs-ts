import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    //render the component
    const { container } = render(<Main />);

    //searches for the element and checks if it exists
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    //generates snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
