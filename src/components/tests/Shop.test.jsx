import Shop from "../Shop";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, getByText} from "@testing-library/react";
import { phones } from "../products/phones";
import { laptop } from "../products/laptops";
import { tablets } from "../products/tablets";


describe('Shop', () => {
  it('Render correct shop category when nav item is clicked', () => {
    render(<Shop />)
    
    const allCategory = screen.getByTestId('ALL');
    const phonesCategory = screen.getByTestId('PHONES');
    const tabletsCategory = screen.getByTestId('TABLETS');
    const laptopsCategory = screen.getByTestId('LAPTOPS');

    expect(allCategory).toBeInTheDocument();
    expect(phonesCategory).toBeInTheDocument();
    expect(tabletsCategory).toBeInTheDocument();
    expect(laptopsCategory).toBeInTheDocument();
    
  });
  

  
  it('renders all products when "ALL" category is selected', () => {
    render(<Shop />);
    
    // select a category
    const phonesCategory = screen.getByTestId('PHONES');
    fireEvent.click(phonesCategory);

    // check if the correct products are displayed based on the selected category
    const productNames = screen.getAllByTestId('product-name');
    const filteredProducts = phones;
    const filteredProductNames = filteredProducts.map(product => product.name);
    productNames.forEach(productName => {
      expect(filteredProductNames).toContain(productName.textContent);
    });
    
  });

});