import Home from "./page";
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
    it('renders a heading', () => {
      const { container } = render(<Home />);
  
      const home = screen.getByText('Home');
  
      expect(home).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });