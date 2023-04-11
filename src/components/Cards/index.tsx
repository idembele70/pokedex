import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getPokemons } from "../../utils/globalFunctions";
import Loader from "../shared/Loader";
import { Container, NotFound, Wrapper } from "./Cards.style";

type CardsProps = {
  pokemonsList: any[];
};
const Cards: React.FC<CardsProps> = ({ pokemonsList }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/pokedex";

  const likedLength = null;
  const [notFoundOpacity, setNotFoundOpacity] = useState(0);
  useEffect(() => {
    if (likedLength === 0 && !loading && !isHomePage)
      setTimeout(() => {
        setNotFoundOpacity(1);
      }, 400);
    return () => {};
  }, [isHomePage, likedLength, loading]);
  return (
    <Container>
      {pokemonsList.length && !isSearching ? <Wrapper>{pokemons}</Wrapper> : ""}
      {likedLength === 0 && !loading && !isHomePage ? (
        <NotFound>It seems like you don't like any pokemons</NotFound>
      ) : (
        ""
      )}
      <Loader opacity={loading} />
    </Container>
  );
};

export default Cards;
