import Test from '@/app/test/page';
import { render, screen } from '@testing-library/react';

describe('<Test />', () => {
    it('renders a heading', () => {
      const { container } = render(<Test />);
  
      const home = screen.getByText('테스트 아이템 입니다.');
  
      expect(home).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });