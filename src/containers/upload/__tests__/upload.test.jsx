import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import UploadContainer from '../Upload';
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
    };
  },
}));
const RootComponent = ({ children }) => <Provider store={store}>{children}</Provider>;
describe('Testing Upload Post', () => {
  beforeEach(() => {
    render(<UploadContainer />, { wrapper: RootComponent });
  });
  test('upload container render successfully', () => {
    const captionText = screen.getByText('Caption');
    expect(captionText).toBeInTheDocument();
  });
});
