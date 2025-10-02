import { RecipeItem } from "@/entities/recipe/ui/RecipeItem/RecipeItem";
import { IRecipe } from "@/features/recipe";
import styles from './RecipesList.module.scss'
import { memo } from "react";

interface IRecipesListProps {
  recipes: IRecipe[] | undefined;
  count: number;
}
  
const RecipesList = memo(({ recipes, count }: IRecipesListProps) => {
  const shortRecipe = recipes?.slice(0, count);

  return (
    <ul className={styles.list}>
      { shortRecipe?.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      )) }
    </ul>
  )
})

RecipesList.displayName = "RecipesList";
export { RecipesList };