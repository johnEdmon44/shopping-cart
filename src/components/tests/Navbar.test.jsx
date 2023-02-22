import Navbar from "../Navbar"
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";


describe('Navbar', () => {
  it('Render the nav links', () => {
    render(<Navbar />);

    const homeLink = screen.getByText('Home');
    const shopLink = screen.getByText('Shop');
    const cartLink = screen.getByText('Cart');
    
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });
  
});
