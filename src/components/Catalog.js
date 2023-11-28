// import { ProductsContainer } from "../containers/ProductsContainer";
import { useQuery } from "@tanstack/react-query";
import { menu } from "../menu";
import { Button } from "./Button";
import { CatalogCard } from "./CatalogCard";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function Catalog() {
  // const { products } = ProductsContainer.useContainer();
  const [page, setPage] = useState(1);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select();

      if (error) throw error;

      return data;
    },
  });

  return (
    <div className="flex flex-col gap-10">
      Меню
      <div className="grid gap-2 grid-cols-4">
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          products.map((item) => <CatalogCard item={item} />)
        )}
      </div>
    </div>
  );
}
