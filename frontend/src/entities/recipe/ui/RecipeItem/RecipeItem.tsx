import { IRecipe } from "@/features/recipe";
import Image from "next/image";

interface IRecipeItemProps {
  recipe: IRecipe;
}
  
export const RecipeItem = ({ recipe }: IRecipeItemProps) => {
  return (
    <li>
      <Image src={recipe.image} alt={`recipe ${recipe.name}`} width={400} loading="lazy" />

      <div>
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.stars}</p>
        </div>

        <div>
          <button></button>
          <p>{recipe.price}</p>
        </div>
      </div>
    </li>
  );
}