"use client"

import { ChangeEvent, useEffect, useState } from "react";
import { useSearch } from "../../api/useSearch";
import { useStore } from "@/app/store/store";

export const SearchField = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { data: search } = useSearch(searchInput);
  const { setSearchResult } = useStore();

  useEffect(() => {
    if (!searchInput.trim()) {
      setSearchResult([]);
      return;
    }

    if (searchInput) {
      setSearchResult(search)
    }
  }, [searchInput, setSearchResult, search])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <input type="text" value={searchInput} onChange={handleChange} />
  );
}