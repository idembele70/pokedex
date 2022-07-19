import { useObservable, useSubscription } from "observable-hooks";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { fromEvent, map } from "rxjs";
import styled, { keyframes } from "styled-components";
import { getPokemons } from "../../utils/utils";
import StateLoading from "../StateLoading";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const Cards = ({ pokemonsList }) => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    setLoading(true);
    const newPokemons = pokemonsList;
    const timer = setTimeout(() => {
      setPokemons(getPokemons(newPokemons.slice(0, limit + 15)));
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pokemonsList, limit]);
  const handleScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrollMaxHeight = scrollHeight - clientHeight;
    const scrollPosition = Math.ceil(scrollTop);
    if (
      scrollPosition >= scrollMaxHeight &&
      (limit + 15 < pokemonsList.length) & !loading
    ) {
      setLoading(true);
      setLimit(limit + 15);
    }
  }, [limit, pokemonsList, loading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Container>
      {pokemons}
      <StateLoading opacity={loading} />
    </Container>
  );
};

Cards.propTypes = {
  pokemonsList: PropTypes.array.isRequired,
};

export default Cards;
