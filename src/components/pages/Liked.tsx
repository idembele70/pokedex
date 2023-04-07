import React, { useEffect, useState } from "react";
import Cards from "../card";
import {
  data,
  filterPokemonsByIds,
  getFromLocalStorage,
} from "../../utils/globalFunctions";

const Liked = () => {
  const [likedPokemons, setLikedPokemons] = useState<any[]>([]);

  useEffect(() => {
    const ids = getFromLocalStorage("likedPokemons");
    if (ids?.length) {
      const likedDB = filterPokemonsByIds(data, ids);
      setLikedPokemons(likedDB);
    }
  }, []);
  return <Cards pokemonsList={likedPokemons} />;
};

export default Liked;
