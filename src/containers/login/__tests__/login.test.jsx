import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';
import LoginContainer from '../Login';
const RootComponent = ({ children }) => <Provider store={store}>{children}</Provider>;
describe('Login Testing', () => {
  beforeEach(() => {
    render(<LoginContainer />, { wrapper: RootComponent });
  });
  test('halaman login sukses di tampilkan dengan memunculkan tulisan Sign In', () => {
    const textSignIn = screen.getByText('Sign In');
    expect(textSignIn).toBeInTheDocument();
  });
  test('melakukan input email pada formulir', () => {
    userEvent.type(screen.getByTestId('input-email'), 'agung@binarc.co.id');
    expect(screen.getByTestId('input-email')).toHaveValue('agung@binarc.co.id');
  });
  test('melakukan input password pada formulir', () => {
    userEvent.type(screen.getByTestId('input-password'), '12341234');
    expect(screen.getByTestId('input-password')).toHaveValue('12341234');
  });
  test('error pada input email', async () => {
    const inputEmail = screen.getByTestId('input-email');
    userEvent.type(inputEmail, 'a{backspace}');
    userEvent.tab();
    await waitFor(() => expect(screen.getByTestId('error-email')).toBeInTheDocument());
  });
  test('error pada input password', async () => {
    const inputPassword = screen.getByTestId('input-password');
    userEvent.type(inputPassword, 'a{backspace}');
    userEvent.tab();
    await waitFor(() => expect(screen.getByTestId('error-password')).toBeInTheDocument());
  });
});
