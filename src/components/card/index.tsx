import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getPokemons } from "../../utils/globalFunctions";
import StateLoading from "../tools/StateLoading";

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
interface NotFoundProps {
  notFoundOpacity: number;
}
const NotFound = styled.h4<NotFoundProps>`
  margin-top: 110px;
  text-align: center;
  opacity: ${({ notFoundOpacity }) => notFoundOpacity};
  transition: opacity 350ms linear;
`;
type CardsProps = {
  pokemonsList: any[];
};
const Cards: React.FC<CardsProps> = ({ pokemonsList }) => {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/pokedex";
  useEffect(() => {
    const newPokemons = pokemonsList;
    const timer = setTimeout(() => {
      if (pokemonsList.length) {
        setPokemons(getPokemons(newPokemons.slice(0, limit + 15)));
      } else if (isHomePage) setPokemons([]);
      setIsSearching(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pokemonsList, limit, isHomePage]);
  const [isSearching, setIsSearching] = useState(false);
  const handleScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrollMaxHeight = scrollHeight - clientHeight;
    const scrollPosition = Math.ceil(scrollTop);
    if (
      scrollPosition + 130 >= scrollMaxHeight &&
      limit + 15 < pokemonsList.length &&
      !loading
    ) {
      setLimit(limit + 15);
    }
  }, [limit, pokemonsList, loading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
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
      {pokemonsList.length === 0 && !loading && !isSearching && isHomePage ? (
        <NotFound notFoundOpacity={1}>
          Sorry but nothing matched your search terms. Please try again with
          some different keywords
        </NotFound>
      ) : (
        ""
      )}
      {likedLength === 0 && !loading && !isHomePage ? (
        <NotFound notFoundOpacity={notFoundOpacity}>
          It seems like you don't like any pokemons
        </NotFound>
      ) : (
        ""
      )}
      <StateLoading opacity={loading} />
    </Container>
  );
};

export default Cards;
