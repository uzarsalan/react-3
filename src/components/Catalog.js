import { menu } from "../menu";
import { Button } from "./Button";
import { CatalogCard } from "./CatalogCard";

export function Catalog() {
  return (
    <div className="flex flex-col gap-10">
      Меню
      <div className="grid gap-2 grid-cols-4">
        {menu.map((item) => (
          <CatalogCard item={item} />
        ))}
      </div>
    </div>
  );
}
