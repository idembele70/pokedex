import { useCallback, useEffect, useState } from "react";
import {
  PokemonItemProps,
  data,
  getPokemons,
} from "../../utils/globalFunctions";
import { useDBContext } from "../context/DBContext";
import Card from "./Card";
import { Container, Wrapper } from "./Cards.style";
import Loader from "../shared/Loader";

const HomeCard = () => {
  const [pokemonList, setPokemonList] = useState<PokemonItemProps[]>([]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(true);
  const {} = useDBContext();
  // get pokemon list
  useEffect(() => {
    const newPokemons = getPokemons(data);
    const timer = setTimeout(() => {
      if (newPokemons) {
        setPokemonList(newPokemons.slice(0, limit + 15));
        setLoading(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [pokemonList, limit]);
  // handle scroll
  const handleScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrollMaxHeight = scrollHeight - clientHeight;
    const scrollPosition = Math.ceil(scrollTop);
    if (
      scrollPosition + 130 >= scrollMaxHeight &&
      limit + 15 <= pokemonList.length &&
      !loading
    ) {
      setLimit(limit + 15);
      setLoading(true);
    }
  }, [pokemonList, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <Container>
      <Wrapper>
        {pokemonList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </Wrapper>
      {loading && <Loader opacity={loading} />}
    </Container>
  );
};

export default HomeCard;
