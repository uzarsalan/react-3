import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { createContainer } from "unstated-next";

function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    supabase
      .from("products")
      .select()
      .then(({ data, error }) => {
        if (error) return console.log(error);
        setProducts(data);
      });
  }, []);

  return {
    products,
  };
}

export const ProductsContainer = createContainer(useProducts);
