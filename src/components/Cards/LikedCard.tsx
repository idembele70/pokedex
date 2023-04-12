import { useCallback, useEffect, useState } from "react";
import {
  PokemonItemProps,
  filterPokemonDataByIdsToCardProps,
  getLocalStorageData,
} from "../../utils/globalFunctions";
import Loader from "../shared/Loader";
import CardItem from "./CardItem";
import { Container, NotFound, Wrapper } from "./Cards.style";
import { useAppContext } from "../context/AppContext";

const LikedCard = () => {
  const [pokemonList, setPokemonList] = useState<PokemonItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    fetch("data/pokemons.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        const timer = setTimeout(() => {
          // Filter Pokemon by searchTerm
          const localStorageData = getLocalStorageData();
          const mappedData: PokemonItemProps[] =
            filterPokemonDataByIdsToCardProps({
              data,
              ids: localStorageData,
            }).slice(0, limit + 15);
          setPokemonList(mappedData);
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      })
      .catch((err) => console.error(err));
  }, [limit]);
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
  }, [pokemonList]);
  // scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  // check if there is no child
  const [notFound, setNotFound] = useState(false);
  const { isNoPokemonLiked } = useAppContext();
  useEffect(() => {
    setNotFound(isNoPokemonLiked);
  }, [isNoPokemonLiked]);
  return (
    <Container>
      <Wrapper className="liked-wrapper">
        {pokemonList.map((props) => (
          <CardItem key={props.id} {...props} />
        ))}
      </Wrapper>
      <Loader opacity={loading} />
      {(pokemonList.length === 0 || notFound) && !loading ? (
        <NotFound>You haven't liked any Pokemon yet.</NotFound>
      ) : (
        ""
      )}
    </Container>
  );
};

export default LikedCard;
