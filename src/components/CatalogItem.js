import { useParams } from "react-router-dom";
import { menu } from "../menu";

export function CatalogItem() {
  const { name } = useParams();
  const catalogItem = menu.find((item) => item.name === name);
  return (
    <div className="flex flex-col gap-10">
      <div className="">{catalogItem.name}</div>
      <div className="">{catalogItem.desription}</div>
    </div>
  );
}
