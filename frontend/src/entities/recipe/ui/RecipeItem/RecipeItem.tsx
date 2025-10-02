import { IRecipe } from "@/features/recipe";
import Image from "next/image";
import IconStar from "../../assets/star.svg";

interface IRecipeItemProps {
  recipe: IRecipe;
}
  
export const RecipeItem = ({ recipe }: IRecipeItemProps) => {
  return (
    <li>
      <Image src={`/api${recipe.image}`} alt={`recipe ${recipe.name}`} width={330} height={231} loading="lazy" />

      <div>
        <div>
          <h2>{recipe.name}</h2>
          <p><IconStar />{recipe.stars}</p>
        </div>

        <div>
          <button>ADD TO CART</button>
          <p>${recipe.price}</p>
        </div>
      </div>
    </li>
  );
}