import { IRecipe } from "@/features/recipe";
import Image from "next/image";
import IconStar from "../../assets/star.svg";
import styles from './RecipeItem.module.scss'

interface IRecipeItemProps {
  recipe: IRecipe;
}
  
export const RecipeItem = ({ recipe }: IRecipeItemProps) => {
  return (
    <li className={styles.item}>
      <Image src={`/api${recipe.image}`} alt={`recipe ${recipe.name}`} width={330} height={231} loading="lazy" />

      <div className={styles.itemContainer}>
        <div className={styles.itemTextContainer}>
          <h2 className={styles.itemTitle}>{recipe.name}</h2>
          <p className={styles.itemStars}><IconStar />{recipe.stars}</p>
        </div>

        <div className={styles.itemTextContainer}>
          <button className={styles.itemButton}>ADD TO CART</button>
          <p className={styles.itemPrice}>$ {recipe.price}</p>
        </div>
      </div>
    </li>
  );
}