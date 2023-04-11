import { useCallback, useEffect, useState } from "react";
import {
  PokemonItemProps,
  filterPokemonDataToCardProps,
  mapPokemonDataToCardProps,
} from "../../utils/globalFunctions";
import Loader from "../shared/Loader";
import Card from "./Card";
import { Container, NotFound, Wrapper } from "./Cards.style";
import { useSearchContext } from "../context/SearchContext";

const HomeCard = () => {
  const [pokemonList, setPokemonList] = useState<PokemonItemProps[]>([]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const { searchTerm, searchName } = useSearchContext();
  useEffect(() => {
    setLimit(0);
    setIsSearching(true);
  }, [searchTerm]);
  // get pokemon list by search term or get all
  useEffect(() => {
    fetch("data/pokemons.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        const timer = setTimeout(() => {
          // Filter Pokemon by searchTerm
          if (searchTerm) {
            const mappedData: PokemonItemProps[] = filterPokemonDataToCardProps(
              { data, searchName, searchTerm }
            ).slice(0, limit + 15);
            setPokemonList(mappedData);
          } else {
            // GET all Pokemons
            const mappedData: PokemonItemProps[] = mapPokemonDataToCardProps(
              data.slice(0, limit + 15)
            );
            setPokemonList(mappedData);
          }
          setLoading(false);
          setIsSearching(false);
        }, 2000);
        return () => clearTimeout(timer);
      })
      .catch((err) => console.error(err));
  }, [limit, searchTerm]);

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
  }, [pokemonList, loading, searchTerm]);
  // scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  // not found listenner
  const [notFoundOpacity, setNotFoundOpacity] = useState(0);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!loading && pokemonList.length === 0)
      timer = setTimeout(() => {
        setNotFoundOpacity(1);
      }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);
  return (
    <Container>
      <Wrapper>
        {!isSearching &&
          pokemonList.map((props, idx) => <Card key={idx} {...props} />)}
      </Wrapper>
      <Loader opacity={loading || isSearching} />
      {pokemonList.length === 0 && !loading && !isSearching ? (
        <NotFound>
          Sorry but nothing matched your search terms. Please try again with
          some different keywords
        </NotFound>
      ) : (
        ""
      )}
    </Container>
  );
};

export default HomeCard;
