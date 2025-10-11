import { useCreateCart } from "@/features/cart";
import { SearchListItem } from "../SearchListItem/SearchListItem";
import { IRecipe } from "@/features/recipe";
import { useStore } from "@/app/store/store";
import styles from './SearchList.module.scss'

interface ISearchListProps {
  searches: IRecipe[] | undefined;
}
  
export const SearchList = ({ searches }: ISearchListProps) => {
  const { mutate } = useCreateCart();
  const { user, setToastMessage, handleOpenToast } = useStore();

  if (searches?.length === 0) {
    return <p className={styles.listMessage}>Ничего не найдено!</p>
  }

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
      { searches?.map((search) => (
        <SearchListItem key={search.id} search={search} addCart={addCart} />
      )) }
    </ul>
  );
}