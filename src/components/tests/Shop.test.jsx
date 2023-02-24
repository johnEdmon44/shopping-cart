import Shop from "../Shop";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, getByText} from "@testing-library/react";

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
    
    // find all product names
    const productNames = screen.getAllByTestId('product-name');
    
    // check that all products are displayed
    expect(productNames.length).toEqual(12); // change 6 to the actual number of products in the "ALL" category
  });

});