import { IRecipe } from "@/features/recipe";
import { Button } from "@/shared/ui";
import Image from "next/image";

interface ISearchListItemProps {
  search: IRecipe;
  addCart: (productId: string) => void;
}
  
export const SearchListItem = ({ search, addCart }: ISearchListItemProps) => {
  return (
    <li>
        <Image src={`${process.env.API_URL}/${search.image}`} alt={search.name} width={80} height={80} />
        <div>
          <h3>{search.name}</h3>
          <p>{search.price}$</p>
          <Button onClick={() => addCart(search.id)}>Buy</Button>
        </div>
    </li>
  );
}