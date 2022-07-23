import { useObservableState, useSubscription } from "observable-hooks";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { likedLength$, loading$, searchTerm$ } from "../../rxjs/rxjs";
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
const NotFound = styled.h4`
  margin-top: 110px;
  text-align: center;
  opacity: ${({ notFoundOpacity }) => notFoundOpacity};
  transition: opacity 350ms linear;
`;
const Cards = ({ pokemonsList }) => {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(0);
  const [pokemons, setPokemons] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const newPokemons = pokemonsList;
    const timer = setTimeout(() => {
      if (pokemonsList.length) {
        setPokemons(getPokemons(newPokemons.slice(0, limit + 15)));
      } else if (isHomePage) setPokemons();
      setIsSearching(false);
      loading$.next(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pokemonsList, limit, isHomePage]);
  const [isSearching, setIsSearching] = useState(false);
  useSubscription(searchTerm$, () => {
    setIsSearching(true);
  });
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
      loading$.next(true);
    }
  }, [limit, pokemonsList, loading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  useSubscription(loading$, (v) => setLoading(v));
  const likedLength = useObservableState(likedLength$, 0);
  const [notFoundOpacity, setNotFoundOpacity] = useState(0);
  useEffect(() => {
    let timer = null;
    if (likedLength === 0 && !loading && !isHomePage)
      timer = setTimeout(() => {
        setNotFoundOpacity(1);
      }, 400);
    return () => clearTimeout(timer);
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

Cards.propTypes = {
  pokemonsList: PropTypes.array.isRequired,
};

export default Cards;
