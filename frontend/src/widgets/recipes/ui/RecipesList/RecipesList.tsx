import { RecipeItem } from "@/entities/recipe/ui/RecipeItem/RecipeItem";
import { IRecipe } from "@/features/recipe";

interface IRecipesListProps {
  recipes: IRecipe[] | undefined;
  count: number;
}
  
export const RecipesList = ({ recipes, count }: IRecipesListProps) => {
  const shortRecipe = recipes?.slice(0, count);

  return (
    <ul>
      { shortRecipe?.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      )) }
    </ul>
  );
}