import React, { useEffect, useState } from "react";
import Cards from "../components/card";
import {
  data,
  filterPokemonsByIds,
  getFromLocalStorage,
} from "../utils/globalFunctions";

import { loading$ } from "../rxjs/rxjs";
const Liked = () => {
  const [likedPokemons, setLikedPokemons] = useState([]);

  useEffect(() => {
    loading$.next(true);
    const ids = getFromLocalStorage("likedPokemons");
    if (ids?.length) {
      const likedDB = filterPokemonsByIds(data, ids);
      setLikedPokemons(likedDB);
    }
  }, []);
  return <Cards pokemonsList={likedPokemons} />;
};

export default Liked;
