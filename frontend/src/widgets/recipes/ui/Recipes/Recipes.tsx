"use client"

import { Button, Container, Title } from "@/shared/ui";
import { RecipesList } from "../RecipesList/RecipesList";
import { useState } from "react";
import { useAllRecipe } from "@/features/recipe";

export const Recipes = () => {
  const [count, setCount] = useState<number>(3);
  const { data: recipes } = useAllRecipe();

  const handleCount = () => count === 3 ? setCount(count + 3) : setCount(count - 3);

  return (
    <section>
      <Container>
        <Title category="Recipes" title="Most Popular Items" />

        <RecipesList recipes={recipes} count={count} />

        <Button onClick={handleCount}>See more recipes</Button>
      </Container>
    </section>
  );
}