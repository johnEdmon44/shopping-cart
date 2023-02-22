import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders navbar links', () => {
    render(<Navbar />);
    expect(screen.getByText('FAKE STORE')).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.href).toContain('/');

    const shopLink = screen.getByRole('link', { name: /shop/i });
    expect(shopLink).toBeInTheDocument();
    expect(shopLink.href).toContain('/shop');

    const cartLink = screen.getByRole('link', { name: /cart/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink.href).toContain('/cart');
  });
});