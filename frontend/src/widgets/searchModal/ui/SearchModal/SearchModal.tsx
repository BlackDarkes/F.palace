"use client"

import { CloseButton } from "@/shared/ui";
import { SearchList } from "../SearchList/SearchList";
import { useStore } from "@/app/store/store";
import { SearchField } from "@/features/search";
import styles from './SearchModal.module.scss'
import { useBlockingScroll } from "@/shared/hooks/useBlockingScroll";

const SearchModal = () => {
  const { searchResult, isOpenSearchModal, handleSearchModal } = useStore();

  useBlockingScroll(isOpenSearchModal);

  return (
    <section className={`${styles.search} ${isOpenSearchModal ? styles.searchActive : ""}`}>
      <div className={styles.searchContainer}>
        <SearchField />

        <SearchList searches={searchResult} />

        <CloseButton handleClose={handleSearchModal} />
      </div>
    </section>
  );
}

export default SearchModal;