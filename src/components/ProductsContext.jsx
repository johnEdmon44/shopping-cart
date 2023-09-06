import { useEffect, useState, createContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');

        if (!response.ok) {
          throw new Error("Network error");
        }

        const json = await response.json();
        setProducts(json);

      } catch (error) {
        console.log(error);
      }
    }

    const fetchCategories = async() => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')

        if (!response.ok) {
          throw new Error("Network error");
        }

        const json = await response.json();
        setCategories(json);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{products, categories}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext; // Export the ProductsContext as the default export
