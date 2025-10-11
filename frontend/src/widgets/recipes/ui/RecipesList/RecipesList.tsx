import { RecipeItem } from "@/entities/recipe/ui/RecipeItem/RecipeItem";
import { IRecipe } from "@/features/recipe";
import styles from './RecipesList.module.scss'
import { memo } from "react";
import { useStore } from "@/app/store/store";
import { useCreateCart } from "@/features/cart";

interface IRecipesListProps {
  recipes: IRecipe[] | undefined;
  count: number;
}
  
const RecipesList = memo(({ recipes, count }: IRecipesListProps) => {
  const { user, setToastMessage, handleOpenToast } = useStore();
  const { mutate } = useCreateCart();
  const shortRecipe = recipes?.slice(0, count);

  const addCart = (productId: string) => {
    if (!user?.id) {
      setToastMessage("Вы не авторизованы!");
      handleOpenToast();
      return;
    }

    mutate({ userId: user?.id, productId: productId, quantity: 1 });
  }

  return (
    <ul className={styles.list}>
      { shortRecipe?.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} addCart={addCart} />
      )) }
    </ul>
  )
})

RecipesList.displayName = "RecipesList";
export { RecipesList };