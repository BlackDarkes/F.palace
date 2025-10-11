"use client"

import { CloseButton } from "@/shared/ui";
import { SearchList } from "../SearchList/SearchList";
import { useStore } from "@/app/store/store";
import { SearchField } from "@/features/search";
import styles from './SearchModal.module.scss'

const SearchModal = () => {
  const { searchResult } = useStore();

  return (
    <section className={styles.search}>
      <div>
        <SearchField />

        <SearchList searches={searchResult} />

        <CloseButton handleClose={() => {}} />
      </div>
    </section>
  );
}

export default SearchModal;