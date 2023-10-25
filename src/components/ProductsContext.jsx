import { useEffect, useState, createContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network error");
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products/', setProducts);
    fetchData('https://fakestoreapi.com/products/categories', setCategories);
  }, []);

  return (
    <ProductsContext.Provider value={{products, categories}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;